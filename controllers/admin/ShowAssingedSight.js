import SightModel from "../../models/admin/AssignedSight.js";

const ShowAssignedSight = async (req, res) => {
  try {
    const show = await SightModel.find();

    res.status(200).json({ message: `Data`, show });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default ShowAssignedSight;
