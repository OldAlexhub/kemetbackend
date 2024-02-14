import ReturnModel from "../../models/client/ReturnBooking.js";

const PostReturn = async (req, res) => {
  try {
    const {
      name,
      returnCity,
      returnPickupAddress,
      returnDate,
      returnTime,
      returndropOffCity,
      returnDropoff,
      userId,
      fare,
    } = req.body;
    const newReturn = await ReturnModel({
      name,
      returnCity,
      returnPickupAddress,
      returnDate,
      returnTime,
      returndropOffCity,
      returnDropoff,
      userId,
      fare,
    });
    await newReturn.save();
    res.status(201).json({ message: `Return Sent` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Server Error!` });
  }
};
export default PostReturn;
