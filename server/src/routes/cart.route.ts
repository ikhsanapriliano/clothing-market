import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import {
    findByUserIdCartHandler,
    findByUserIdAndProductIdCartHandler,
    createOrUpdateCartHandler,
    removeCartHandler,
} from "../controllers/cart.controller";

const cartRoute = Router();

cartRoute.get("/", authMiddleware(["ADMIN", "USER"]), findByUserIdCartHandler);
cartRoute.get(
    "/product/:productId",
    authMiddleware(["ADMIN", "USER"]),
    findByUserIdAndProductIdCartHandler
);
cartRoute.post(
    "/",
    authMiddleware(["ADMIN", "USER"]),
    createOrUpdateCartHandler
);
cartRoute.delete("/:id", authMiddleware(["ADMIN", "USER"]), removeCartHandler);

export default cartRoute;
