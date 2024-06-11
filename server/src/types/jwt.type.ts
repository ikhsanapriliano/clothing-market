import { JwtPayload } from "jsonwebtoken";

export interface verifyTokentype {
    payload: string | JwtPayload;
    error: Error | unknown | null;
}
