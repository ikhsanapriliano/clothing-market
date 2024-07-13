import { Router } from "express";
import {
    createShipperHandler,
    findAllShipperHandler,
    removeShipperHandler,
    updateShipperHandler,
} from "../controllers/shipper.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const shipperRoute = Router();

shipperRoute.get("/", authMiddleware(["ADMIN", "USER"]), findAllShipperHandler);
shipperRoute.post("/", authMiddleware(["ADMIN"]), createShipperHandler);
shipperRoute.patch("/:id", authMiddleware(["ADMIN"]), updateShipperHandler);
shipperRoute.delete("/:id", authMiddleware(["ADMIN"]), removeShipperHandler);

export default shipperRoute;
