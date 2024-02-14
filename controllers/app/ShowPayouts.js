import PaidModel from "../../models/admin/Paid.js";

const ShowPayouts = async (req, res) => {
  try {
    const { driverId } = req.params;

    const show = await PaidModel.find({ driverId: driverId });

    res.status(200).json({ message: `Data`, show });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default ShowPayouts;
