import { JwtPayload } from "jsonwebtoken";

export interface VerifyTokentype {
    payload: string | JwtPayload;
    error: Error | unknown | null;
}
