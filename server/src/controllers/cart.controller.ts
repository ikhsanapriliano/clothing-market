import { NextFunction, Request, Response } from "express";
import {
    findByUserIdCart,
    findByUserIdAndProductIdCart,
    createOrUpdateCart,
    removeCart,
} from "../services/cart.service";
import { ResponseType } from "../types/common.type";

export const findByUserIdCartHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const userId = res.locals.userId;

        const data = await findByUserIdCart(userId);
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

export const findByUserIdAndProductIdCartHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const userId = res.locals.userId;
        const productId = req.params.productId;

        const data = await findByUserIdAndProductIdCart(userId, productId);
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

export const createOrUpdateCartHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const userId = res.locals.userId;
        const payload = req.body;

        const data = await createOrUpdateCart(userId, payload);
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

export const removeCartHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const id = req.params.id;
        const userId = res.locals.userId;

        const data = await removeCart(id, userId);
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
