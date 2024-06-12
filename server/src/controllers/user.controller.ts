import { NextFunction, Request, Response } from "express";
import {
    changePassword,
    findByIdUser,
    removeUser,
    updateProfile,
} from "../services/user.service";
import { ResponseType } from "../types/common.type";
import { changePasswordPayload, profilePayload } from "../types/user.type";

export const findByIdUserHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const id = res.locals.userId;

        const data = await findByIdUser(id);

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

export const changePasswordHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const id = res.locals.userId;
        const payload: changePasswordPayload = req.body;

        const data = await changePassword(id, payload);

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

export const updateProfileHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const id = res.locals.userId;
        const payload: profilePayload = req.body;

        const data = await updateProfile(id, payload);

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

export const removeUserHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | undefined> => {
    try {
        const id = res.locals.userId;

        const data = await removeUser(id);

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
