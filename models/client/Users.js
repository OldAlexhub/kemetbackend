import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: `Email is incorrect`,
    },
  },
  password: { type: String, required: true },
  confirmPassword: {
    type: String,
    select: false,
    default: undefined,
    // Confirm password validation might be better handled in application logic
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: `Passwords not matching`,
    },
  },
  phoneNumber: { type: Number, required: true },
  role: { type: String, default: "user" },
});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
