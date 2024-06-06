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

    const response: ErrorType = {
        error: "500 internal server error",
        message: err.message,
    };

    res.status(500).json(response);
};

export const notFound = (req: Request, res: Response): void => {
    const response: ErrorType = {
        error: "404 not found",
        message: "please input the right endpoint",
    };

    res.status(404).json(response);
};
