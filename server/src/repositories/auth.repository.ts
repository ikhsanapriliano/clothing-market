import prisma from "../utils/prisma";
import { registerPayload } from "../types/auth.type";

export const register = async (payload: registerPayload): Promise<void> => {
    await prisma.user.create({
        data: {
            username: payload.username,
            email: payload.email,
            password: payload.password,
            role: "USER",
        },
    });
};
