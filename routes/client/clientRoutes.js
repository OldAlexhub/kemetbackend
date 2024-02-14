import { Router } from "express";
import Signup from "../../controllers/client/Signup.js";
import Login from "../../controllers/client/Login.js";
import PostBooking from "../../controllers/client/PostBooking.js";
import ShowBooking from "../../controllers/client/ShowBooking.js";
import PostReturn from "../../controllers/client/PostReturn.js";
import ShowReturn from "../../controllers/client/ShowReturn.js";
import PostCC from "../../controllers/client/PostCC.js";
import ShowPayment from "../../controllers/client/ShowPayment.js";
import PostSightseeing from "../../controllers/client/PostSightseeing.js";
import ShowSight from "../../controllers/client/ShowSight.js";
import BecomeDriver from "../../controllers/client/BecomeDriver.js";
import BecomePartner from "../../controllers/client/Partner.js";
import PostContact from "../../controllers/client/PostContact.js";
import SearchTrip from "../../controllers/client/SearchTrip.js";
import SearchReturn from "../../controllers/client/searchReturn.js";
import SearchSights from "../../controllers/client/searchSights.js";

const client = Router();

client.post("/signup", Signup);
client.post("/login", Login);
client.post("/booking", PostBooking);
client.get("/mytrips", ShowBooking);
client.post("/return", PostReturn);
client.get("/myreturn", ShowReturn);
client.post("/postpayment", PostCC);
client.get("/mypayment", ShowPayment);
client.post("/sightseeing", PostSightseeing);
client.get("/mysight", ShowSight);
client.post("/becomedriver", BecomeDriver);
client.post("/partner", BecomePartner);
client.post("/postcontact", PostContact);
client.get("/mytripz", SearchTrip);
client.get("/myreturnz", SearchReturn);
client.get("/mysightz", SearchSights);

export default client;
