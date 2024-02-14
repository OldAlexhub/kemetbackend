import AssignedModel from "../../models/admin/AssignedTrips.js";

const AssignTrips = async (req, res) => {
  try {
    const {
      bookingId,
      driverId,
      name,
      arrivalDate,
      pickupAddress,
      pickupDate,
      pickupTime,
      passCount,
      destination,
      dropoffAddress,
      phoneNumber,
      email,
      fare,
    } = req.body;

    const newAssignment = await AssignedModel({
      bookingId,
      driverId,
      name,
      arrivalDate,
      pickupAddress,
      pickupDate,
      pickupTime,
      passCount,
      destination,
      dropoffAddress,
      phoneNumber,
      email,
      fare,
    });
    await newAssignment.save();
    res.status(201).json({ message: `Assigned Trip` });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default AssignTrips;
