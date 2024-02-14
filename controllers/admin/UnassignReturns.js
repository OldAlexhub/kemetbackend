import AssignedReturnsModel from "../../models/admin/AssignedReturns.js";

const UnassignReturns = async (req, res) => {
  try {
    const { driverId } = req.params;

    const updateTrip = await AssignedReturnsModel.findOneAndDelete({
      driverId: driverId,
    });

    res.status(201).json({ messagE: `Trip removed`, updateTrip });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default UnassignReturns;
