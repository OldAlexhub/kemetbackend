import AdminModel from "../../models/admin/Admins.js";

const ShowAdmins = async (req, res) => {
  try {
    const admins = await AdminModel.find();

    res.status(200).json({ message: `Admins`, admins });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default ShowAdmins;
