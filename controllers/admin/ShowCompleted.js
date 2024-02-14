import CompletedModel from "../../models/app/CompletedTrips.js";

const ShowCompleted = async (req, res) => {
  try {
    const completed = await CompletedModel.find();

    res.status(202).json({ message: `Completed Trips`, completed });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default ShowCompleted;
