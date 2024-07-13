import { Category } from "@prisma/client";
import { findByName } from "../repositories/category.repository";

export const findByNameCategory = async (name: string): Promise<Category> => {
    const data = await findByName(name);
    if (data == null) throw new Error(`400:category is not valid`);

    return data;
};
