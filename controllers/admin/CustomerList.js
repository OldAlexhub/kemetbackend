import UserModel from "../../models/client/Users.js";

const ShowCustomerList = async (req, res) => {
  try {
    const show = await UserModel.find();

    res.status(200).json({ message: `Data`, show });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default ShowCustomerList;
