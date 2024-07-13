import { NextFunction, Request, Response } from "express";
import {
    addReview,
    editReview,
    findByProductIdAndUserIdReview,
    removeReview,
} from "../services/review.service";
import { ResponseType } from "../types/common.type";

export const findByProductIdAndUserIdReviewHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const userId = res.locals.userId;
        const productId = req.params.productId;

        const data = await findByProductIdAndUserIdReview(productId, userId);
        const response: ResponseType = {
            status: 200,
            message: "success",
            data,
        };

        return res.json(response);
    } catch (error: Error | unknown) {
        next(error);
    }
};

export const addReviewHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const userId = res.locals.userId;
        const payload = req.body;

        const data = await addReview(userId, payload);
        const response: ResponseType = {
            status: 201,
            message: "success",
            data,
        };

        return res.json(response);
    } catch (error: Error | unknown) {
        next(error);
    }
};

export const editReviewHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const userId = res.locals.userId;
        const payload = req.body;

        const data = await editReview(userId, payload);
        const response: ResponseType = {
            status: 200,
            message: "success",
            data,
        };

        return res.json(response);
    } catch (error: Error | unknown) {
        next(error);
    }
};

export const removeReviewHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const userId = res.locals.userId;
        const productId = req.params.productId;

        const data = await removeReview(productId, userId);
        const response: ResponseType = {
            status: 200,
            message: "success",
            data,
        };

        return res.json(response);
    } catch (error: Error | unknown) {
        next(error);
    }
};
