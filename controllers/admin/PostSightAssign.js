import SightModel from "../../models/admin/AssignedSight.js";

const PostSightAssign = async (req, res) => {
  try {
    const {
      bookingId,
      name,
      pickupAddress,
      date,
      time,
      duration,
      dropoffAddress,
      phoneNumber,
      fare,
      special,
      driverId,
    } = req.body;

    const newSight = await SightModel({
      bookingId,
      name,
      pickupAddress,
      date,
      time,
      duration,
      dropoffAddress,
      phoneNumber,
      fare,
      special,
      driverId,
    });
    await newSight.save();

    res.status(201).json({ message: `Submitted` });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default PostSightAssign;
