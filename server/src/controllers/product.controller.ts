import { NextFunction, Request, Response } from "express";
import {
    findAllProduct,
    findByIdProduct,
    findByStoreIdProduct,
    createProduct,
    updateProduct,
    removeProduct,
} from "../services/product.service";
import { ResponseType } from "../types/common.type";

export const findAllProductHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const data = await findAllProduct();
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

export const findByIdProductHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const id = req.params.id;

        const data = await findByIdProduct(id);
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

export const findByStoreIdProductHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const storeId = req.params.storeId;

        const data = await findByStoreIdProduct(storeId);
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

export const createProductHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const userId = res.locals.userId;
        const payload = req.body;

        const data = await createProduct(userId, payload);
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

export const updateProductHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const userId = res.locals.userId;
        const id = req.params.id;
        const payload = req.body;

        const data = await updateProduct(userId, id, payload);
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

export const removeProductHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const userId = res.locals.userId;
        const id = req.params.id;

        const data = await removeProduct(userId, id);
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
