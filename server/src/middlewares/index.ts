import express, { type Application } from "express";
import cors from "cors";
import { errorHandler, notFound } from "./error.middleware";
import routes from "../routes";

const app: Application = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
        preflightContinue: true,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    })
);

app.use(express.json());
app.use("/api", routes);

app.use("*", errorHandler);
app.use("*", notFound);

export default app;
