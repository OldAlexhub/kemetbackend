import BookingModel from "../../models/client/Booking.js";

const ShowBooking = async (req, res) => {
  try {
    const { userId } = req.query;
    const booking = await BookingModel.find({ userId });

    res.status(200).json({ message: `Booking Data`, booking });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default ShowBooking;
