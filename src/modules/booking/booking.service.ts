import mongoose from "mongoose";
import tourModel from "../Tour/tour.model";
import TBooking from "./booking.interface";
import bookingModel from "./booking.model";

const createBooking = async (payload: TBooking): Promise<TBooking> => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const { userId, tourId, quantityOfSeats } = payload;
    const tour = await tourModel.findById(tourId).session(session);

    if (!tour) {
      throw new Error("tour not found");
    }

    if (tour.totalSeats < quantityOfSeats) {
      throw new Error("not enough seats available");
    }
    if (payload.quantityOfSeats === 0) {
      throw new Error("quantityOfSeats must be greater than 0");
    }
    const totalPrice = tour.price * quantityOfSeats;
    tour.totalSeats -= quantityOfSeats;
    await tour.save({ session });
    const status = "pending";
    payload.totalPrice = totalPrice;
    payload.status = status;
    const booking = { tourId, userId, quantityOfSeats, totalPrice, status };

    const result = await bookingModel.create([booking], { session });
    console.log(result);
    await session.commitTransaction();
    await session.endSession();
    return result[0];
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw err;
  }
};

export const bookingServices = {
  createBooking,
};
