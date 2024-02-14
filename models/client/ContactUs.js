import mongoose from "mongoose";

const ContactUsSchema = new mongoose.Schema({
  userId: String,
  email: String,
  name: String,
  phone: Number,
  bookingId: Number,
  concern: String,
});
const ContactModel = mongoose.model("contactus", ContactUsSchema);

export default ContactModel;
