import { Router } from "express";
import Login from "../../controllers/app/Login.js";
import TripRequest from "../../controllers/app/TripRequests.js";
import AcceptTrips from "../../controllers/app/AcceptTrips.js";
import Delete from "../../controllers/app/Delete.js";
import ShowMyTrips from "../../controllers/app/ShowMyTrips.js";
import DeleteAssigned from "../../controllers/app/DeleteAssigned.js";
import PostCompleted from "../../controllers/app/PostCompleted.js";
import ShowMyCompleted from "../../controllers/app/ShowCompleted.js";
import ShowPayouts from "../../controllers/app/ShowPayouts.js";
import ShowReturnTrips from "../../controllers/app/ShowReturnTrips.js";
import AcceptReturnTrips from "../../controllers/app/AcceptReturnTrips.js";
import DeleteAssignedReturn from "../../controllers/app/DeleteReturnTrips.js";
import ShowMyReturnTrips from "../../controllers/app/ShowMyReturnTrip.js";
import ShowSightSeeing from "../../controllers/app/ShowSightSeeings.js";
import AcceptSights from "../../controllers/app/AcceptSights.js";
import DeleteAssignedSight from "../../controllers/app/DeleteAssignedSight.js";
import ShowAcceptedSight from "../../controllers/app/ShowAcceptedSights.js";
import DenyReturns from "../../controllers/app/DenyReturns.js";
import DeleteAssignedSights from "../../controllers/app/DeleteAssignedSights.js";

const App = Router();

App.post("/login", Login);
App.get("/assigned/:driverId", TripRequest);
App.post("/accept", AcceptTrips);
App.delete("/delete/:driverId", Delete);
App.get("/mytrips/:driverId", ShowMyTrips);
App.delete("/deleteassigned/:driverId", DeleteAssigned);
App.post("/completed", PostCompleted);
App.get("/showmytrips/:driverId", ShowMyCompleted);
App.get("/payouts/:driverId", ShowPayouts);
App.get("/returns/:driverId", ShowReturnTrips);
App.delete("/denyreturn/:driverId", DenyReturns);
App.delete("/deletereturns/:driverId", DeleteAssignedReturn);
App.post("/acceptreturn", AcceptReturnTrips);
App.get("/myreturntrips/:driverId", ShowMyReturnTrips);
App.get("/mysightseeing/:driverId", ShowSightSeeing);
App.post("/acceptsights", AcceptSights);
App.delete("/deleteassignedsight/:driverId", DeleteAssignedSight);
App.get("/showacceptedsights/:driverId", ShowAcceptedSight);
App.delete("/deleteassigneds/:driverId", DeleteAssignedSights);
export default App;