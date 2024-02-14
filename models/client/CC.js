import mongoose from "mongoose";

const CCSchema = new mongoose.Schema({
  referenceNumber: { type: String, unique: true },
  name: String,
  email: String,
  userId: String,
  ccNumber: Number,
  csv: Number,
  expirationDate: Date,
  zipCode: String,
});

function generateRandomReferenceNumber() {
  // Generate a 12-digit random number and return as a string
  let randomNumber = "";
  for (let i = 0; i < 12; i++) {
    randomNumber += Math.floor(Math.random() * 10).toString();
  }
  return randomNumber;
}

CCSchema.pre("save", async function (next) {
  if (this.isNew) {
    let unique = false;
    let randomReferenceNumber;
    while (!unique) {
      randomReferenceNumber = generateRandomReferenceNumber();
      const existingRecord = await CCModel.findOne({
        referenceNumber: randomReferenceNumber,
      });
      if (!existingRecord) {
        unique = true;
      }
    }
    this.referenceNumber = randomReferenceNumber;
  }
  next();
});

const CCModel = mongoose.model("ccnumbers", CCSchema);

export default CCModel;
