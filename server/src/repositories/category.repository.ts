import { Category } from "@prisma/client";
import prisma from "../utils/prisma";

export const findByName = async (name: string): Promise<Category | null> => {
    const data = await prisma.category.findUnique({
        where: {
            name,
        },
    });

    return data;
};
