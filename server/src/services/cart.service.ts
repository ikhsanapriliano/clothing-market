import { Cart } from "@prisma/client";
import {
    findByUserId,
    findByIdAndUserId,
    create,
    remove,
    findByUserIdAndProductId,
    update,
} from "../repositories/cart.repository";
import { CartPayload } from "../types/cart.type";
import { findByIdProduct } from "./product.service";
import { cartPayloadValidation } from "../validations/cart.validation";
import { findByIdStore } from "./store.service";

export const findByUserIdCart = async (userId: string): Promise<Cart[]> => {
    const data = await findByUserId(userId);

    return data;
};

export const findByUserIdAndProductIdCart = async (
    userId: string,
    productId: string
): Promise<Cart | null> => {
    await findByIdProduct(productId);
    const data = await findByUserIdAndProductId(userId, productId);

    return data;
};

export const createOrUpdateCart = async (
    userId: string,
    payload: CartPayload
): Promise<string> => {
    let stock = 100000;
    if (payload.productId !== undefined && payload.storeId !== undefined) {
        const product = await findByIdProduct(payload.productId);
        stock = product.stock;
        await findByIdStore(payload.storeId);
    }

    const { value, error } = cartPayloadValidation(payload, stock);
    if (error !== undefined) throw new Error(`400:${error.message}`);

    const cart = await findByUserIdAndProductIdCart(userId, payload.productId);

    if (cart === null) {
        await create(userId, value);
    } else {
        await update(cart.id, value);
    }

    const data = "product successfully added to cart";

    return data;
};

export const removeCart = async (
    id: string,
    userId: string
): Promise<string> => {
    const cart = await findByIdAndUserId(id, userId);
    if (cart === null)
        throw new Error(`400:you don't have the product in your cart`);

    await remove(id);
    const data = `product successfully removed from cart`;

    return data;
};
