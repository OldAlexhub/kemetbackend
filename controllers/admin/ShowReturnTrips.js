import ReturnModel from "../../models/client/ReturnBooking.js";

const ShowReturnTrips = async (req, res) => {
  try {
    const show = await ReturnModel.find();

    res.status(200).json({ message: `Return Trip Data`, show });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default ShowReturnTrips;
