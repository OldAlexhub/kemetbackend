import ContactModel from "../../models/client/ContactUs.js";

const PostContact = async (req, res) => {
  try {
    const { userId, email, name, phone, bookingId, concern } = req.body;

    const newContact = await ContactModel({
      userId,
      email,
      name,
      phone,
      bookingId,
      concern,
    });
    await newContact.save();

    res.status(201).json({ message: `Contacted!`, newContact });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default PostContact;
