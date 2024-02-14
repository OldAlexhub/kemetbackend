import CCModel from "../../models/client/CC.js";

const ShowPayment = async (req, res) => {
  try {
    const { userId } = req.query;
    // console.log(userId);
    const payments = await CCModel.find({ userId });

    res.status(200).json({ message: `Payment Data`, payments });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default ShowPayment;
