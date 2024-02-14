import BecomePartner from "../../models/client/BecomePartner.js";

const ShowCompany = async (req, res) => {
  try {
    const show = await BecomePartner.find();

    res.status(200).json({ message: `Companies`, show });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default ShowCompany;
