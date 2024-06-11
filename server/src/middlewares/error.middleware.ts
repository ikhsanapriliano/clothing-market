import { type NextFunction, type Request, type Response } from "express";
import logger from "../utils/winston";
import { ErrorType } from "../types/common.type";

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    logger.error(err);

    let response: ErrorType = {
        error: "500 internal server error",
        message: err.message,
    };

    const message = err.message.split(":");
    switch (message[0]) {
        case "400":
            response.error = "400 bad request";
            response.message = message[1];
            res.status(400).json(response);
            break;
        case "401":
            response.error = "401 unauthorized";
            response.message = message[1];
            res.status(401).json(response);
            break;
        case "403":
            response.error = "403 forbidden";
            response.message = message[1];
            res.status(403).json(response);
            break;
        default:
            break;
    }

    res.status(500).json(response);
};

export const notFound = (req: Request, res: Response): void => {
    const response: ErrorType = {
        error: "404 not found",
        message: "please input the right endpoint",
    };

    res.status(404).json(response);
};
