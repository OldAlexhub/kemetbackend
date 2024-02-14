import AdminModel from "../../models/admin/Admins.js";
import bcrypt from "bcrypt";

const Register = async (req, res) => {
  try {
    const { fname, lname, email, password, confirmPassword } = req.body;
    const exisitngAdmin = await AdminModel.findOne({ email });
    if (exisitngAdmin) {
      return res.status(400).json({ message: `Admin Exists` });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: `Passwords don't match!` });
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    const newAdmin = await AdminModel({
      fname,
      lname,
      email,
      password: hashedPassword,
    });
    await newAdmin.save();
    res.status(201).json({ message: `New admin created!` });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default Register;
