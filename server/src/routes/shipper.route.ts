import { Router } from "express";
import {
    createShipperHandler,
    findAllShipperHandler,
    removeShipperHandler,
    updateShipperHandler,
} from "../controllers/shipper.controller";

const shipperRoute = Router();

shipperRoute.get("/", findAllShipperHandler);
shipperRoute.post("/", createShipperHandler);
shipperRoute.patch("/:id", updateShipperHandler);
shipperRoute.delete("/:id", removeShipperHandler);

export default shipperRoute;
