import AssignedReturnsModel from "../../models/admin/AssignedReturns.js";

const ShowAssignedReturns = async (req, res) => {
  try {
    const show = await AssignedReturnsModel.find();

    res.status(200).json({ message: `Data`, show });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default ShowAssignedReturns;
