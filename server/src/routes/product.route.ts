import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import {
    findAllProductHandler,
    findByIdProductHandler,
    findByStoreIdProductHandler,
    createProductHandler,
    updateProductHandler,
    removeProductHandler,
} from "../controllers/product.controller";

const productRoute = Router();

productRoute.get("/", authMiddleware(["ADMIN", "USER"]), findAllProductHandler);
productRoute.get(
    "/:id",
    authMiddleware(["ADMIN", "USER"]),
    findByIdProductHandler
);
productRoute.get(
    "/store/:storeId",
    authMiddleware(["ADMIN", "USER"]),
    findByStoreIdProductHandler
);
productRoute.post("/", authMiddleware(["ADMIN", "USER"]), createProductHandler);
productRoute.patch(
    "/:id",
    authMiddleware(["ADMIN", "USER"]),
    updateProductHandler
);
productRoute.delete(
    "/:id",
    authMiddleware(["ADMIN", "USER"]),
    removeProductHandler
);

export default productRoute;
