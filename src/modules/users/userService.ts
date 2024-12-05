import { IUser } from "./userInterface";
import userModel from "./userModel";

const createUser = async (body: IUser): Promise<IUser> => {
  const result = await userModel.create(body);
  return result;
};

export const userServices = {
  createUser,
};
