import { Store } from "@prisma/client";
import prisma from "../utils/prisma";
import { StorePayload } from "../types/store.type";

export const findAll = async (): Promise<Store[]> => {
    const data = await prisma.store.findMany();

    return data;
};

export const findById = async (id: string): Promise<Store | null> => {
    const data = await prisma.store.findUnique({
        where: {
            id,
        },
    });

    return data;
};

export const create = async (
    userId: string,
    payload: StorePayload
): Promise<void> => {
    await prisma.store.create({
        data: {
            name: payload.name as string,
            address: payload.address as string,
            description: payload.description as string,
            photo: payload.description as string,
            userId,
        },
    });
};

export const update = async (
    userId: string,
    payload: StorePayload
): Promise<void> => {
    await prisma.store.update({
        where: {
            userId,
        },
        data: payload,
    });
};

export const remove = async (userId: string): Promise<void> => {
    await prisma.store.delete({
        where: {
            userId,
        },
    });
};
