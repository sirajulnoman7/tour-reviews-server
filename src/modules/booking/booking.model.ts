import { model, Schema } from "mongoose";
import TBooking from "./booking.interface";

const createBooking = new Schema<TBooking>({
  tourId: { type: Schema.Types.ObjectId, ref: "tour", required: true },
  userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
  quantityOfSeats: { type: Number, required: true },
  totalPrice: { type: Number },
  status: { type: String },
});

const bookingModel = model<TBooking>("booking", createBooking);
export default bookingModel;
