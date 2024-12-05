import { Router } from "express";
import { userController } from "./userController";

const userRouter = Router();
userRouter.post("/create-user", userController.createUser);

export default userRouter;
