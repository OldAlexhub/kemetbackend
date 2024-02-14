import PaidModel from "../../models/admin/Paid.js";

const ShowPayments = async (req, res) => {
  try {
    const show = await PaidModel.find();

    res.status(200).json({ message: `Data`, show });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default ShowPayments;
