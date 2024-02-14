import CompletedModel from "../../models/app/CompletedTrips.js";

const PostCompleted = async (req, res) => {
  try {
    const { driverId, name, tripDate, from, to, fare, bookingId } = req.body;

    const newComplete = await CompletedModel({
      bookingId,
      driverId,
      name,
      tripDate,
      from,
      to,
      fare,
    });
    await newComplete.save();
    res.status(201).json({ message: `Completed!`, newComplete });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default PostCompleted;
