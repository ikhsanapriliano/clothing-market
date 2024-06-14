import { Store } from "@prisma/client";
import {
    findAll,
    findById,
    create,
    update,
    remove,
} from "../repositories/store.repository";
import { StorePayload } from "../types/store.type";
import { findByIdUser } from "./user.service";
import { storePayloadValidation } from "../validations/store.validation";

export const findAllStore = async (): Promise<Store[]> => {
    const data = await findAll();

    return data;
};

export const findByIdStore = async (id: string): Promise<Store> => {
    const data = await findById(id);
    if (data == null) throw new Error(`400:store with id ${id} not found`);

    return data;
};

export const createStore = async (
    userId: string,
    payload: StorePayload
): Promise<string> => {
    await findByIdUser(userId);

    const { value, error } = storePayloadValidation("create", payload);
    if (error != undefined) throw new Error(`400:${error.message}`);

    await create(userId, value);
    const data = `store successfully created`;

    return data;
};

export const updateStore = async (
    userId: string,
    payload: StorePayload
): Promise<string> => {
    await findByIdUser(userId);

    const { value, error } = storePayloadValidation("update", payload);
    if (error != undefined) throw new Error(`400:${error.message}`);

    await update(userId, value);
    const data = `store successfully updated`;

    return data;
};

export const removeStore = async (userId: string) => {
    await findByIdUser(userId);

    await remove(userId);
    const data = `store successfully deleted`;

    return data;
};
