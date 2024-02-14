import UserModel from "../../models/client/Users.js";
import bcrypt from "bcrypt";
import sendWelcomeEmail from "../../emails/Accounts.js";

const Signup = async (req, res) => {
  try {
    const { fname, lname, email, password, phoneNumber, confirmPassword } =
      req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: `User already exists!` });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: `Passwords don't match!` });
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await UserModel({
      fname,
      lname,
      email,
      password: hashedPassword,
      phoneNumber,
    });
    await newUser.save();
    sendWelcomeEmail(newUser.email, newUser.fname);
    res.status(201).json({ message: `New User Created!` });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default Signup;
