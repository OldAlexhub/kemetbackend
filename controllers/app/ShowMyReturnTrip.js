import AcceptedReturnModel from "../../models/app/AcceptedReturns.js";

const ShowMyReturnTrips = async (req, res) => {
  try {
    const { driverId } = req.params;
    const show = await AcceptedReturnModel.find({ driverId: driverId });

    res.status(200).json({ message: `Data`, show });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default ShowMyReturnTrips;
