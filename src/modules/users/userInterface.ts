export interface IUser extends Document {
  name: string;
  email: string;
  contactNumber: string;
  photo?: string; // Optional field
  age: number; // Optional field
  isActive: "active" | "inActive"; // Limited to "active" or "inActive"
  isAdmin: "user" | "admin"; // Limited to "user" or "admin"
}
