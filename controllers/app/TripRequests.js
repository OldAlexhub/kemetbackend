import AssignedModel from "../../models/admin/AssignedTrips.js";

const TripRequest = async (req, res) => {
  try {
    const { driverId } = req.params;
    // console.log(driverId);
    const trips = await AssignedModel.find({ driverId });

    res.status(200).json({ message: `Trip Assignments`, trips });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default TripRequest;
