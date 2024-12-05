import { Router } from "express";
import userRouter from "../users/userRoute";
import tourRoutes from "../Tour/tour.route";
import bookingRoutes from "../booking/booking.route";

const routes = Router();
const moduleRouter = [
  {
    path: "/users",
    router: userRouter,
  },
  {
    path: "/tour",
    router: tourRoutes,
  },
  {
    path: "/booking",
    router: bookingRoutes,
  },
];
moduleRouter.forEach((route) => routes.use(route.path, route.router));
export default routes;
