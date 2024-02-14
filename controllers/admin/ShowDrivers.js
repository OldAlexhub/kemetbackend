import DriverModel from "../../models/admin/Drivers.js";

const ShowDriver = async (req, res) => {
  try {
    const driver = await DriverModel.find();
    res.status(200).json({ message: `Drivers`, driver });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default ShowDriver;
