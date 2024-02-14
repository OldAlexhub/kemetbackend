import AcceptedReturnModel from "../../models/app/AcceptedReturns.js";

const DeleteAssignedReturn = async (req, res) => {
  try {
    const { driverId } = req.params;
    // console.log(driverId);
    const updateTrips = await AcceptedReturnModel.findOneAndDelete({
      driverId: driverId,
    });
    res.status(201).json({ message: `Trip deleted`, updateTrips });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default DeleteAssignedReturn;
