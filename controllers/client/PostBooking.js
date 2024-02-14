import BookingModel from "../../models/client/Booking.js";
import sendConfirmation from "../../emails/BookingConfirmation.js";

const PostBooking = async (req, res) => {
  try {
    const {
      userId,
      name,
      pickupAddress,
      pickupDate,
      pickupTime,
      passCount,
      destination,
      dropoffAddress,
      phoneNumber,
      email,
      fare,
      airlines,
      flightNumber,
      arrivalDate,
    } = req.body;
    const newBooking = await BookingModel({
      userId,
      name,
      pickupAddress,
      pickupDate,
      pickupTime,
      passCount,
      destination,
      dropoffAddress,
      phoneNumber,
      email,
      fare,
      airlines,
      flightNumber,
      arrivalDate,
    });
    await newBooking.save();
    sendConfirmation(
      newBooking.email,
      newBooking.name,
      newBooking.pickupAddress,
      newBooking.pickupDate,
      newBooking.pickupTime,
      newBooking.destination,
      newBooking.fare
    );
    res.status(201).json({ message: `Booking Created!` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Server Error!` });
  }
};
export default PostBooking;
