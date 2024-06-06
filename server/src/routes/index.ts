import { Router } from "express";
import categoryRoute from "./category.route";
import shipperRoute from "./shipper.route";

const routes = Router();

routes.use("/categories", categoryRoute);
routes.use("/shippers", shipperRoute);

export default routes;
