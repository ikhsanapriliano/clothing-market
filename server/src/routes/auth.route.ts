import { Router } from "express";
import {
    loginUserHandler,
    registerUserHandler,
    verifyUserHandler,
} from "../controllers/auth.controller";

const authRoute = Router();

authRoute.post("/register", registerUserHandler);
authRoute.post("/login", loginUserHandler);
authRoute.get("/verify/:id", verifyUserHandler);

export default authRoute;
