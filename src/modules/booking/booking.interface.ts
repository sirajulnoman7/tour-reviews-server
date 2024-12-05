import { Types } from "mongoose";

type TBooking = {
  tourId: Types.ObjectId;
  userId: Types.ObjectId;
  quantityOfSeats: number;
  totalPrice: number;
  status: string;
};

export default TBooking;
