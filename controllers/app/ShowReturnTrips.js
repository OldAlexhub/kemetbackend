import AssignedReturnsModel from "../../models/admin/AssignedReturns.js";

const ShowReturnTrips = async (req, res) => {
  try {
    const { driverId } = req.params;
    const show = await AssignedReturnsModel.find({ driverId: driverId });

    res.status(200).json({ message: `Data`, show });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default ShowReturnTrips;
