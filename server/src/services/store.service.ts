import { Store } from "@prisma/client";
import {
    findAll,
    findById,
    create,
    update,
    remove,
    findByUserId,
} from "../repositories/store.repository";
import { StorePayload } from "../types/store.type";
import { findByIdUser } from "./user.service";
import { storePayloadValidation } from "../validations/store.validation";

export const findAllStore = async (limit?: number): Promise<Store[]> => {
    const data = await findAll(limit ? limit : undefined);

    return data;
};

export const findByIdStore = async (id: string): Promise<Store> => {
    const data = await findById(id);
    if (data == null) throw new Error(`400:store with id ${id} not found`);

    return data;
};

export const findByUserIdStore = async (userId: string): Promise<Store> => {
    const data = await findByUserId(userId);
    if (data == null)
        throw new Error(`400:user with id ${userId} doesn't have store`);

    return data;
};

export const createStore = async (
    userId: string,
    payload: StorePayload
): Promise<string> => {
    await findByIdUser(userId);
    const store = await findByUserId(userId);
    if (store !== null) throw new Error(`user already has store`);

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
    await findByUserIdStore(userId);

    const { value, error } = storePayloadValidation("update", payload);
    if (error != undefined) throw new Error(`400:${error.message}`);

    await update(userId, value);
    const data = `store successfully updated`;

    return data;
};

export const removeStore = async (userId: string) => {
    await findByUserIdStore(userId);

    await remove(userId);
    const data = `store successfully deleted`;

    return data;
};
