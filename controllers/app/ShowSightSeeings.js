import SightModel from "../../models/admin/AssignedSight.js";

const ShowSightSeeing = async (req, res) => {
  try {
    const { driverId } = req.params;
    const show = await SightModel.find({ driverId: driverId });

    res.status(200).json({ message: `Data`, show });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default ShowSightSeeing;
