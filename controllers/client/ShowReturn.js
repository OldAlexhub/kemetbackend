import ReturnModel from "../../models/client/ReturnBooking.js";

const ShowReturn = async (req, res) => {
  try {
    const { userId } = req.query;
    // console.log(userId);
    const returns = await ReturnModel.find({ userId });
    res.status(200).json({ message: `Return Data`, returns });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Server Error!` });
  }
};
export default ShowReturn;
