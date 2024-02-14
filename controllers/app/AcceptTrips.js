import AcceptedTripsModel from "../../models/app/AcceptTrips.js";

const AcceptTrips = async (req, res) => {
  try {
    const {bookingId, driverId, name, from, fromTime, fromDate, toAddress, fare } =
      req.body;

    const newTrip = await AcceptedTripsModel({
      bookingId,
      driverId,
      name,
      from,
      fromTime,
      fromDate,
      toAddress,
      fare,
    });
    await newTrip.save();
    res.status(201).json({ message: `Trip Accepted`, newTrip });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default AcceptTrips;
