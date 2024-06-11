import Joi from "joi";
import { loginPayload, registerInput } from "../types/auth.type";

export const registerPayloadValidation = (
    payload: registerInput
): Joi.ValidationResult<registerInput> => {
    const schema = Joi.object({
        email: Joi.string().trim().email().required(),
        password: Joi.string().trim().min(6).required(),
        confirmPassword: Joi.string()
            .trim()
            .min(6)
            .required()
            .valid(Joi.ref("password")),
    });

    return schema.validate(payload);
};

export const loginPayloadValidation = (
    payload: loginPayload
): Joi.ValidationResult<loginPayload> => {
    const schema = Joi.object({
        email: Joi.string().trim().email().required(),
        password: Joi.string().trim().min(6).required(),
    });

    return schema.validate(payload);
};
