import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import {
    addReviewHandler,
    editReviewHandler,
    findByProductIdAndUserIdReviewHandler,
    removeReviewHandler,
} from "../controllers/review.controller";

const reviewRoute = Router();

reviewRoute.get(
    "/:productId",
    authMiddleware(["ADMIN", "USER"]),
    findByProductIdAndUserIdReviewHandler
);
reviewRoute.post("/", authMiddleware(["ADMIN", "USER"]), addReviewHandler);
reviewRoute.patch("/", authMiddleware(["ADMIN", "USER"]), editReviewHandler);
reviewRoute.delete(
    "/:productId",
    authMiddleware(["ADMIN", "USER"]),
    removeReviewHandler
);

export default reviewRoute;
