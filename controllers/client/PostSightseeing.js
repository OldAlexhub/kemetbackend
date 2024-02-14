import SightseeModel from "../../models/client/Sightseeing.js";

const PostSightseeing = async (req, res) => {
  try {
    const {
      userId,
      name,
      pickupAddress,
      duration,
      dropoffAddress,
      date,
      time,
      email,
      phoneNumber,
      fare,
      special,
    } = req.body;

    const newSight = await SightseeModel({
      userId,
      name,
      pickupAddress,
      duration,
      dropoffAddress,
      email,
      phoneNumber,
      fare,
      date,
      time,
      special,
    });
    await newSight.save();

    res.status(201).json({ message: `Sight Posted` });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default PostSightseeing;
