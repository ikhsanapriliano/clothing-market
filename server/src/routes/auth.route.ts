import { Router } from "express";

const authRoute = Router();

authRoute.post("/register");
authRoute.post("/login");

export default authRoute;
