import { model, Schema } from "mongoose";
import { IUser } from "./userInterface";

const userSchema = new Schema<IUser>({
  name: { type: String, require: [true, "please enter your name"] },
  email: {
    type: String,
    unique: true,
    require: [true, "please enter valid your email"],
  },
  contactNumber: {
    type: String,
    require: [true, "please enter your phone number"],
  },
  photo: String,
  age: { type: Number },
  isActive: {
    type: String,
    enum: ["active", "inActive"],
    default: "active",
  },
  isAdmin: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

const userModel = model<IUser>("user", userSchema);

export default userModel;
