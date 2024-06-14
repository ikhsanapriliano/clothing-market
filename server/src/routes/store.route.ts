import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import {
    findAllStoreHandler,
    findByIdStoreHandler,
    createStoreHandler,
    updateStoreHandler,
    removeStoreHandler,
} from "../controllers/store.controller";

const storeRoute = Router();

storeRoute.get("/", authMiddleware(["ADMIN", "USER"]), findAllStoreHandler);
storeRoute.get("/:id", authMiddleware(["ADMIN", "USER"]), findByIdStoreHandler);
storeRoute.post("/", authMiddleware(["ADMIN", "USER"]), createStoreHandler);
storeRoute.patch("/", authMiddleware(["ADMIN", "USER"]), updateStoreHandler);
storeRoute.delete("/", authMiddleware(["ADMIN", "USER"]), removeStoreHandler);

export default storeRoute;
