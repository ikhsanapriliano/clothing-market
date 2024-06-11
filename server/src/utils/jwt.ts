import "dotenv/config";
import jsonWebToken, { JwtPayload } from "jsonwebtoken";
import { tokenPayload } from "../types/auth.type";
import { verifyTokentype } from "../types/jwt.type";

export const generateAccessToken = (user: tokenPayload): string => {
    const token = jsonWebToken.sign(user, String(process.env.JWT_SECRET), {
        expiresIn:
            process.env.JWT_EXPIRES_IN != null
                ? String(process.env.JWT_EXPIRES_IN)
                : "1800s",
    });

    return token;
};

export const verifyAccessToken = (token: string): verifyTokentype => {
    let data: verifyTokentype;

    try {
        const payload = jsonWebToken.verify(
            token,
            String(process.env.JWT_SECRET)
        );
        data = {
            payload,
            error: null,
        };

        return data;
    } catch (error: Error | unknown) {
        data = {
            payload: "",
            error: (error as Error).message,
        };

        return data;
    }
};
