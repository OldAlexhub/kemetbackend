import BookingModel from "../../models/client/Booking.js";

const ShowTrips = async (req, res) => {
  try {
    const trips = await BookingModel.find();

    res.status(200).json({ message: `Trips`, trips });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default ShowTrips;
