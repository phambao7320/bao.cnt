import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    cartItems: {
      type: Object,
      default: {},
    },
  },
  { minimize: false }
);

const User = models?.User || model("User", UserSchema);

export default User;
