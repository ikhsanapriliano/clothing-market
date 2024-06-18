import { Cart } from "@prisma/client";
import prisma from "../utils/prisma";
import { CartPayload } from "../types/cart.type";

export const findByUserId = async (userId: string): Promise<Cart[]> => {
    const data = await prisma.cart.findMany({
        where: {
            userId,
        },
    });

    return data;
};

export const findByIdAndUserId = async (
    id: string,
    userId: string
): Promise<Cart | null> => {
    const data = await prisma.cart.findFirst({
        where: {
            id,
            userId,
        },
    });

    return data;
};

export const findByUserIdAndProductId = async (
    userId: string,
    productId: string
): Promise<Cart | null> => {
    const data = await prisma.cart.findFirst({
        where: {
            userId,
            productId,
        },
    });

    return data;
};

export const create = async (
    userId: string,
    payload: CartPayload
): Promise<void> => {
    await prisma.cart.create({
        data: {
            ...payload,
            userId,
        },
    });
};

export const update = async (
    id: string,
    payload: CartPayload
): Promise<void> => {
    await prisma.cart.update({
        where: {
            id,
        },
        data: {
            quantity: payload.quantity,
        },
    });
};

export const remove = async (id: string): Promise<void> => {
    await prisma.cart.delete({
        where: {
            id,
        },
    });
};
