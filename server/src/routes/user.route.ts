import { Router } from "express";
import {
    changePasswordHandler,
    findByIdUserHandler,
    removeUserHandler,
    updateProfileHandler,
} from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const userRoute = Router();

userRoute.get("/", authMiddleware(["ADMIN", "USER"]), findByIdUserHandler);
userRoute.patch(
    "/password/change",
    authMiddleware(["ADMIN", "USER"]),
    changePasswordHandler
);
userRoute.patch(
    "/profile",
    authMiddleware(["ADMIN", "USER"]),
    updateProfileHandler
);
userRoute.delete("/", authMiddleware(["ADMIN", "USER"]), removeUserHandler);

export default userRoute;
