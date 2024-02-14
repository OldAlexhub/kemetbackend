import AcceptedSightsModel from "../../models/app/AcceptedSights.js";

const ShowAcceptedSight = async (req, res) => {
  try {
    const { driverId } = req.params;
    // console.log(driverId);
    const show = await AcceptedSightsModel.find({ driverId: driverId });

    res.status(200).json({ message: `Data`, show });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default ShowAcceptedSight;
