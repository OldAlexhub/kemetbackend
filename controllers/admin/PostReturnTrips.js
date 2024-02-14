import AssignedReturnsModel from "../../models/admin/AssignedReturns.js";

const PostReturnTrips = async (req, res) => {
  try {
    const {
      bookingId,
      driverId,
      name,
      returnCity,
      returnPickupAddress,
      returnDate,
      returnTime,
      returnDropOffCity,
      returnDropoff,
      fare,
    } = req.body;

    const newReturn = await AssignedReturnsModel({
      bookingId,
      name,
      returnCity,
      returnPickupAddress,
      returnDate,
      returnTime,
      returnDropOffCity,
      returnDropoff,
      driverId,
      fare,
    });

    await newReturn.save();

    res.status(201).json({ message: `Posted!` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Server Error!` });
  }
};
export default PostReturnTrips;
