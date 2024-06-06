import { Router } from "express";

const categoryRoute = Router();

categoryRoute.get("/");
categoryRoute.post("/");
categoryRoute.patch("/:id");
categoryRoute.delete("/:id");

export default categoryRoute;
