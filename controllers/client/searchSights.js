import SightseeModel from "../../models/client/Sightseeing.js";

const SearchSights = async (req, res) => {
  try {
    // Correctly extract phoneNumber from req.query
    const { phoneNumber } = req.query; // Destructure to get phoneNumber

    // Use the phoneNumber in your query to find all matching documents
    const trips = await SightseeModel.find({ phoneNumber: phoneNumber });

    // Check if any trips were found
    if (trips.length > 0) {
      res.status(200).json({ message: "Trip Data", show: trips });
    } else {
      // If no trips were found, send a 404 response
      res
        .status(404)
        .json({ message: "No trips found with the provided phone number" });
    }
  } catch (error) {
    console.error(error); // Use console.error for errors
    res.status(500).json({ message: "Server Error!" });
  }
};

export default SearchSights;
