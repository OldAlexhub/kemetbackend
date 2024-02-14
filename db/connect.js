import mongoose from "mongoose";

const connect = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to Mongo DB 😃`);
  } catch (error) {
    console.log(`Failed to connect to MongoDB`);
  }
};
export default connect;
