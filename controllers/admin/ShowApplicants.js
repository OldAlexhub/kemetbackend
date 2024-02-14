import BecomeDriverModel from "../../models/client/BecomeDriver.js";

const ShowApplicants = async (req, res) => {
  try {
    const applicants = await BecomeDriverModel.find();
    res.status(200).json({ message: `Applicants`, applicants });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default ShowApplicants;
