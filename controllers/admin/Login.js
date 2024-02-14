import AdminModel from "../../models/admin/Admins.js";
import bycrpt from "bcrypt";
import jwt from "jsonwebtoken";

const AdminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await AdminModel.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: `Admin not found!` });
    }
    const validPassword = bycrpt.compare(password, admin.password);
    if (!validPassword) {
      return res.status(400).json({ message: `Invalid Credentials` });
    }
    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    const name = admin.fname + " " + admin.lname;
    const userId = admin._id;
    const role = admin.role;
    res
      .header("Authorization", `Bearer ${token}`)
      .status(200)
      .json({ message: `Login Successful`, token, userId, name, role });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Server Error!` });
  }
};
export default AdminLogin;
