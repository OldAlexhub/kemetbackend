import SightseeModel from "../../models/client/Sightseeing.js";

const Showsight = async (req, res) => {
  try {
    const show = await SightseeModel.find();

    res.status(200).json({ message: `Data`, show });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default Showsight;
