import { RegisterPayload } from "../types/auth";
import { ErrorType } from "../types/response";
import { getApiUrl } from "../utils/api";

const apiUrl = getApiUrl();

export const registerUser = async (
    payload: RegisterPayload
): Promise<ErrorType | undefined> => {
    const response = await fetch(`${apiUrl}/api/auth/register`, {
        method: "post",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            confirmPassword: payload.confirmPassword,
        }),
    });

    const result = await response.json();
    if (response.status !== 200) {
        return result as ErrorType;
    }
};

export const verifyUser = async (id: string): Promise<unknown> => {
    const response = await fetch(`${apiUrl}/api/auth/verify/${id}`, {
        method: "get",
        headers: {
            "content-type": "application/json",
        },
    });

    const result = await response.json();
    return result;
};
