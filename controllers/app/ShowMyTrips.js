import AcceptedTripsModel from "../../models/app/AcceptTrips.js";

const ShowMyTrips = async (req, res) => {
  try {
    const { driverId } = req.params;
    // console.log(driverId);
    const myTrips = await AcceptedTripsModel.find({ driverId: driverId });

    res.status(200).json({ message: `Trip Data`, myTrips });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Server Error!` });
  }
};
export default ShowMyTrips;
