import { NextFunction, Request, Response } from "express";
import { loginUser, registerUser, verifyUser } from "../services/auth.service";
import { loginPayload, registerInput } from "../types/auth.type";
import { ResponseType } from "../types/common.type";

export const registerUserHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const payload: registerInput = req.body;

        const data = await registerUser(payload);

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

export const verifyUserHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const id = req.params.id;

        const data = await verifyUser(id);

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

export const loginUserHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const payload: loginPayload = req.body;

        const data = await loginUser(payload);

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
