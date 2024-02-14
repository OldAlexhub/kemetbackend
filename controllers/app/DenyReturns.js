import AssignedReturnsModel from "../../models/admin/AssignedReturns.js";

const DenyReturns = async (req, res) => {
  try {
    const { driverId } = req.params;
    // console.log(driverId);
    const updateTrip = await AssignedReturnsModel.findOneAndDelete({
      driverId: driverId,
    });

    res.status(201).json({ message: `Trip Removed`, updateTrip });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default DenyReturns;
