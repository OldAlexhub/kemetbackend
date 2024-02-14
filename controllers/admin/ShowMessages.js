import ContactModel from "../../models/client/ContactUs.js";

const ShowMessages = async (req, res) => {
  try {
    const show = await ContactModel.find();

    res.status(200).json({ message: `Messages`, show });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default ShowMessages;
