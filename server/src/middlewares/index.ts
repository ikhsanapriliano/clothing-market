import express, { type Application } from "express";
import cors from "cors";
import routes from "../routes";
import { errorHandler, notFound } from "./error.middleware";

const app: Application = express();

app.use(
  cors({
    origin: true,
    credentials: true,
    preflightContinue: false,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

app.use("*", cors());
app.use(express.json());
app.use(routes);

app.use("*", errorHandler);
app.use("*", notFound);

export default app;
