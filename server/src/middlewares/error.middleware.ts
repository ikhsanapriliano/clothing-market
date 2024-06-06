import { type NextFunction, type Request, type Response } from "express";
import logger from "../utils/winston";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  logger.error(err);
  res.status(500).json({
    error: "500 internal server error",
    message: err.message,
  });
};

export const notFound = (req: Request, res: Response): void => {
  res.status(404).json({
    error: "404 not found",
    message: "please input the right endpoint",
  });
};
