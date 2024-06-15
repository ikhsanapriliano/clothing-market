import Joi from "joi";
import { ProductInputCreate, ProductInputUpdate } from "../types/product.type";

export const productInputCreateValidation = (
    payload: ProductInputCreate
): Joi.ValidationResult<ProductInputCreate> => {
    const schema = Joi.object({
        name: Joi.string().trim().required(),
        description: Joi.string().trim().required(),
        price: Joi.number().min(10000).required(),
        stock: Joi.number().min(1).required(),
        category: Joi.string().trim().required(),
        utility: Joi.array()
            .items(Joi.string().valid("Man", "Woman", "Boy", "Girl"))
            .required(),
        size: Joi.array().items(Joi.string()).required(),
        photo: Joi.array().items(Joi.string()).required(),
        color: Joi.array()
            .items(
                Joi.object({
                    name: Joi.string().required(),
                    code: Joi.string().required(),
                })
            )
            .required(),
    });

    return schema.validate(payload);
};

export const productInputUpdateValidation = (
    payload: ProductInputUpdate
): Joi.ValidationResult<ProductInputUpdate> => {
    const schema = Joi.object({
        name: Joi.string().trim(),
        description: Joi.string().trim(),
        price: Joi.number().min(10000),
        stock: Joi.number().min(1),
        category: Joi.string().trim(),
        utility: Joi.array().items(
            Joi.object({
                id: Joi.string().trim(),
                name: Joi.string()
                    .trim()
                    .required()
                    .valid("Man", "Woman", "Boy", "Girl"),
            })
        ),
        size: Joi.array().items(
            Joi.object({
                id: Joi.string().trim(),
                name: Joi.string().required(),
            })
        ),
        photo: Joi.array().items(
            Joi.object({
                id: Joi.string().trim(),
                name: Joi.string().required(),
            })
        ),
        color: Joi.array().items(
            Joi.object({
                id: Joi.string().trim(),
                name: Joi.string().required(),
                code: Joi.string().required(),
            })
        ),
    });

    return schema.validate(payload);
};
