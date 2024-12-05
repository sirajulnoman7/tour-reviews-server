import catchAsync from "../utility/catchAsync";
import sendResponse from "../utility/sendResponse";
import { tourServices } from "./tour.service";

const createTour = catchAsync(async (req, res) => {
  const body = req.body;

  // TODO: Add validation logic for the incoming request body
  const result = await tourServices.createTour(body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "tour created successfully",
    data: result,
  });
});

export const tourController = {
  createTour,
};
