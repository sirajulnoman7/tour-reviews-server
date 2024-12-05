import { Router } from "express";
import { tourController } from "./tour.controller";

const tourRoutes = Router();

tourRoutes.post("/create-tour", tourController.createTour);

export default tourRoutes;
