import { Request, Response, NextFunction } from "express";
import {
    createShipper,
    findAllShipper,
    removeShipper,
    updateShipper,
} from "../services/shipper.service";
import { ResponseType } from "../types/common.type";

export const findAllShipperHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const data = await findAllShipper();

        const response: ResponseType = {
            status: 200,
            message: "success",
            data,
        };

        return res.json(response);
    } catch (error: Error | unknown) {
        throw error;
    }
};

export const createShipperHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const payload = req.body;
        const data = await createShipper(payload);

        const response: ResponseType = {
            status: 201,
            message: "success",
            data,
        };

        return res.json(response);
    } catch (error: Error | unknown) {
        throw error;
    }
};

export const updateShipperHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const id = req.params.id;
        const payload = req.body;

        const data = await updateShipper(id, payload);

        const response: ResponseType = {
            status: 200,
            message: "success",
            data,
        };

        return res.json(response);
    } catch (error: Error | unknown) {
        throw error;
    }
};

export const removeShipperHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const id = req.params.id;

        const data = await removeShipper(id);

        const response: ResponseType = {
            status: 200,
            message: "success",
            data,
        };

        return res.json(response);
    } catch (error: Error | unknown) {
        throw error;
    }
};
