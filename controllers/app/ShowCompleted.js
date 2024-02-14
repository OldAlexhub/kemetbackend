import CompletedModel from "../../models/app/CompletedTrips.js";

const ShowMyCompleted = async (req, res) => {
  try {
    const { driverId } = req.params;
    const showCompleted = await CompletedModel.find({ driverId: driverId });

    res.status(200).json({ message: `My Trips`, showCompleted });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default ShowMyCompleted;
