import { User } from "@prisma/client";
import prisma from "../utils/prisma";

export const findById = async (id: string): Promise<User | null> => {
    const data = await prisma.user.findUnique({
        where: {
            id,
        },
    });

    return data;
};
