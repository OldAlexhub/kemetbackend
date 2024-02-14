import mogoose from "mongoose";

const BecomePartnerSchema = new mogoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  companyName: String,
  fleetSize: String,
  city: String,
});
const BecomePartnerModel = mogoose.model("partnerRequest", BecomePartnerSchema);

export default BecomePartnerModel;
