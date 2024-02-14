import BecomeDriverModel from "../../models/client/BecomeDriver.js";

const DeleteApproved = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);
    const updateState = await BecomeDriverModel.findByIdAndDelete(id);

    res.status(200).json({ message: `DELETED`, updateState });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default DeleteApproved;
