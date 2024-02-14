import mongoose from "mongoose";
import validator from "validator";

const AdminSchema = new mongoose.Schema({
  date: Date,
  fname: String,
  lname: String,
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Email is formatted wrong"], // Corrected validation
  },
  password: { type: String, minlength: 8, required: true },
  confirmPassword: {
    type: String,
    select: false,
    default: undefined,
    validate: {
      validator: function (value) {
        // Corrected validator function
        return value === this.password;
      },
      message: "Passwords don't match!",
    },
  },
  role: { type: String, default: "admin" },
});

const AdminModel = mongoose.model("Admin", AdminSchema); // Changed 'admin' to 'Admin' for convention

export default AdminModel;
