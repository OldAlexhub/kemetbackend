import AssignedModel from "../../models/admin/AssignedTrips.js";

const ShowAssigned = async (req, res) => {
  try {
    const assigned = await AssignedModel.find();

    res.status(200).json({ message: `Assigned Trips`, assigned });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default ShowAssigned;
