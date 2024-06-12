import { Router } from "express";
import shipperRoute from "./shipper.route";
import authRoute from "./auth.route";
import userRoute from "./user.route";

const routes = Router();

routes.use("/auth", authRoute);
routes.use("/users", userRoute);
routes.use("/shippers", shipperRoute);

export default routes;
