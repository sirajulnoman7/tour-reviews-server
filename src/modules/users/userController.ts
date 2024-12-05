import { userServices } from "./userService";
import catchAsync from "../utility/catchAsync";
import sendResponse from "../utility/sendResponse";

const createUser = catchAsync(async (req, res) => {
  const body = req.body;
  // TODO: Add validation logic for the incoming request body
  // console.log(body);
  const result = await userServices.createUser(body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "user created successfully",
    data: result,
  });
});

export const userController = {
  createUser,
};
