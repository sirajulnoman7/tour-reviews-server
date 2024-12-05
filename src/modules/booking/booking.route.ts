import { Router } from "express";
import { bookingController } from "./booking.controller";

const bookingRoutes = Router();

bookingRoutes.post("/create-booking", bookingController.createBooking);

export default bookingRoutes;
