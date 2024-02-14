import AssignedModel from "../../models/admin/AssignedTrips.js";

const Delete = async (req, res) => {
  try {
    const { driverId } = req.params;
    // console.log(driverId);
    const updateTrip = await AssignedModel.findOneAndDelete({
      driverId: driverId,
    });

    res.status(201).json({ message: `Trip Removed`, updateTrip });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default Delete;
