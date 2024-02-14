import AcceptedReturnModel from "../../models/app/AcceptedReturns.js";

const AcceptReturnTrips = async (req, res) => {
  try {
    const {
      bookingId,
      driverId,
      name,
      from,
      fromTime,
      fromDate,
      toAddress,
      fare,
    } = req.body;

    const newReturn = await AcceptedReturnModel({
      bookingId,
      driverId,
      name,
      from,
      fromTime,
      fromDate,
      toAddress,
      fare,
    });
    await newReturn.save();

    res.status(201).json({ message: "Trip Accepted" });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default AcceptReturnTrips;
