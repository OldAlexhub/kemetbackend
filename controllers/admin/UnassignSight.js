import SightModel from "../../models/admin/AssignedSight.js";

const UnassignSight = async (req, res) => {
  const { id } = req.params; // Ensure this is correctly extracting the ID
  if (!id) {
    return res.status(400).json({ message: "No trip ID provided." });
  }

  try {
    const deleteTrip = await SightModel.findByIdAndDelete(id);
    if (!deleteTrip) {
      return res.status(404).json({ message: "Trip not found." });
    }
    res.status(200).json({ message: "Trip successfully unassigned." });
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
};

export default UnassignSight;
