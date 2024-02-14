import UserModel from "../../models/client/Users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: `User not found!` });
    }
    const validPassword = bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: `Invalid Credentials` });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    const name = user.fname + " " + user.lname;
    const role = user.role;
    const userId = user._id;
    const phone = user.phoneNumber;
    const mail = user.email;
    res
      .status(200)
      .header("Authorization", `Bearer ${token}`)
      .json({
        message: `Login Successful`,
        token,
        userId,
        name,
        role,
        phone,
        mail,
      });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default Login;
