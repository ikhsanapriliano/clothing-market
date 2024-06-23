import { Router } from "express";
import shipperRoute from "./shipper.route";
import authRoute from "./auth.route";
import userRoute from "./user.route";
import storeRoute from "./store.route";
import productRoute from "./product.route";
import cartRoute from "./cart.route";
import reviewRoute from "./review.route";

const routes = Router();

routes.use("/auth", authRoute);
routes.use("/users", userRoute);
routes.use("/stores", storeRoute);
routes.use("/products", productRoute);
routes.use("/carts", cartRoute);
routes.use("/shippers", shipperRoute);
routes.use("/reviews", reviewRoute);

export default routes;
