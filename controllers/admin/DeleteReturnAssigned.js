import AssignedReturnsModel from "../../models/admin/AssignedReturns.js";

const DeleteReturnAssigned = async (req, res) => {
  const { id } = req.params; // Ensure this is correctly extracting the ID
  if (!id) {
    return res.status(400).json({ message: "No trip ID provided." });
  }

  try {
    const deleteTrip = await AssignedReturnsModel.findByIdAndDelete(id);
    if (!deleteTrip) {
      return res.status(404).json({ message: "Trip not found." });
    }
    res.status(200).json({ message: "Trip successfully unassigned." });
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
};
export default DeleteReturnAssigned;
