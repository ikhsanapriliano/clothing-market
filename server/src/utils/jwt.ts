import "dotenv/config";
import jsonWebToken from "jsonwebtoken";
import { TokenPayload } from "../types/auth.type";
import { VerifyTokentype } from "../types/jwt.type";

export const generateAccessToken = (user: TokenPayload): string => {
    const token = jsonWebToken.sign(user, String(process.env.JWT_SECRET), {
        expiresIn:
            process.env.JWT_EXPIRES_IN != null
                ? String(process.env.JWT_EXPIRES_IN)
                : "1800s",
    });

    return token;
};

export const verifyAccessToken = (token: string): VerifyTokentype => {
    let data: VerifyTokentype;

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
            error: `validation error ${(error as Error).message}`,
        };

        return data;
    }
};
