import catchAsync from "../utility/catchAsync";
import sendResponse from "../utility/sendResponse";
import { bookingServices } from "./booking.service";

const createBooking = catchAsync(async (req, res) => {
  const body = req.body;

  // TODO: Add validation logic for the incoming request body
  const result = await bookingServices.createBooking(body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "booking created successfully",
    data: result,
  });
});

export const bookingController = {
  createBooking,
};
