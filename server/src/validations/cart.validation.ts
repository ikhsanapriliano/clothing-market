import Joi from "joi";
import { CartPayload } from "../types/cart.type";

export const cartPayloadValidation = (
    payload: CartPayload,
    stock: number
): Joi.ValidationResult<CartPayload> => {
    const schema = Joi.object({
        quantity: Joi.number().min(1).max(stock).required(),
        productId: Joi.string().trim().required(),
        storeId: Joi.string().trim().required(),
    });

    return schema.validate(payload);
};
