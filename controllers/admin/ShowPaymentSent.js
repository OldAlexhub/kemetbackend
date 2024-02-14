import PayDriverModel from "../../models/admin/PayDrivers.js";

const ShowPaymentSent = async (req, res) => {
  try {
    const show = await PayDriverModel.find();

    res.status(200).json({ message: `Payment`, show });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default ShowPaymentSent;
