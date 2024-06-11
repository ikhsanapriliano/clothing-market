import prisma from "../utils/prisma";
import { registerPayload } from "../types/auth.type";
import { User } from "@prisma/client";

export const register = async (payload: registerPayload): Promise<string> => {
    const data = await prisma.user.create({
        data: {
            username: payload.username,
            email: payload.email,
            password: payload.password,
            role: "USER",
        },
        select: {
            id: true,
        },
    });

    return data.id;
};

export const verify = async (id: string): Promise<void> => {
    await prisma.user.update({
        where: {
            id,
        },
        data: {
            verified: true,
        },
    });
};

export const login = async (email: string): Promise<User | null> => {
    const data = prisma.user.findUnique({
        where: {
            email,
        },
    });

    return data;
};
