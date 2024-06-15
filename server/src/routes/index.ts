import { Router } from "express";
import shipperRoute from "./shipper.route";
import authRoute from "./auth.route";
import userRoute from "./user.route";
import storeRoute from "./store.route";
import productRoute from "./product.route";

const routes = Router();

routes.use("/auth", authRoute);
routes.use("/users", userRoute);
routes.use("/stores", storeRoute);
routes.use("products", productRoute);
routes.use("/shippers", shipperRoute);

export default routes;
