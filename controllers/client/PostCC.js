import CCModel from "../../models/client/CC.js";

const PostCC = async (req, res) => {
  try {
    const { userId, ccNumber, csv, expirationDate, zipCode, email, name } =
      req.body;
    if (!ccNumber && !csv && !expirationDate && !zipCode) {
      return res.status(400).json({ message: `One field is missing!` });
    }
    const newCCPayment = await CCModel({
      email,
      name,
      userId,
      ccNumber,
      csv,
      expirationDate,
      zipCode,
    });
    await newCCPayment.save();
    res.status(201).json({ message: `Payment Posted!` });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default PostCC;
