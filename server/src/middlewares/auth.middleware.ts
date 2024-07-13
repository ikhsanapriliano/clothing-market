import { NextFunction, Request, Response } from "express";
import { verifyAccessToken } from "../utils/jwt";
import { JwtPayload } from "jsonwebtoken";

export const authMiddleware = (roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization?.split(" ")[1];
        if (token == undefined)
            throw new Error(`401:you don't have access permission`);

        const { payload, error } = verifyAccessToken(token as string);
        if (error != null) throw new Error(`401:${error}`);

        let match = false;
        roles.forEach((role) => {
            if (role == (payload as JwtPayload).role) {
                match = true;
            }
        });

        if (match == false) {
            throw new Error(`403:you don't have access authority`);
        }

        res.locals.userId = (payload as JwtPayload).id;

        next();
    };
};
