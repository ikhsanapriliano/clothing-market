import { Router } from "express";

const shipperRoute = Router();

shipperRoute.get("/");
shipperRoute.post("/");
shipperRoute.patch("/:id");
shipperRoute.delete("/:id");

export default shipperRoute;
