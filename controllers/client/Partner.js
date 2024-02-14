import BecomePartnerModel from "../../models/client/BecomePartner.js";

const BecomePartner = async (req, res) => {
  try {
    const { name, email, phoneNumber, companyName, fleetSize, city } = req.body;

    const newPartner = await BecomePartnerModel({
      name,
      email,
      phoneNumber,
      companyName,
      fleetSize,
      city,
    });
    await newPartner.save();
    res.status(201).json({ message: `Added` });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default BecomePartner;
