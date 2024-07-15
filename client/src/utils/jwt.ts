import { TokenPayload } from "../types/auth";
import jsonwebtoken from "jsonwebtoken";

export const validateToken = async (token: string): Promise<TokenPayload> => {
    const secretKey = import.meta.env.VITE_APP_JWT_SECRET;

    try {
        const payload = jsonwebtoken.verify(token, secretKey) as TokenPayload;
        return payload;
    } catch (error: Error | unknown) {
        throw (error as Error).message;
    }
};
