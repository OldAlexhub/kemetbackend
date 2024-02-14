import AcceptedSightsModel from "../../models/app/AcceptedSights.js";

const AcceptSights = async (req, res) => {
  try {
    const { bookingId, driverId, name, from, date, time, duration, to, fare } =
      req.body;

    const newSight = await AcceptedSightsModel({
      bookingId,
      driverId,
      name,
      from,
      date,
      time,
      duration,
      to,
      fare,
    });

    await newSight.save();

    res.status(201).json({ message: `Data` });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default AcceptSights;
