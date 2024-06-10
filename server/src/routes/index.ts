import { Router } from "express";
import categoryRoute from "./category.route";
import shipperRoute from "./shipper.route";
import authRoute from "./auth.route";

const routes = Router();

routes.use("/auth", authRoute);
routes.use("/categories", categoryRoute);
routes.use("/shippers", shipperRoute);

export default routes;
