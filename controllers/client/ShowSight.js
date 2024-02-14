import SightseeModel from "../../models/client/Sightseeing.js";

const ShowSight = async (req, res) => {
  try {
    const { userId } = req.query;
    const show = await SightseeModel.find({ userId });
    res.status(200).json({ message: `sightseeing`, show });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default ShowSight;
