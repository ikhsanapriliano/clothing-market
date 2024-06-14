import Joi from "joi";
import { LoginPayload, RegisterInput } from "../types/auth.type";

export const registerPayloadValidation = (
    payload: RegisterInput
): Joi.ValidationResult<RegisterInput> => {
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
    payload: LoginPayload
): Joi.ValidationResult<LoginPayload> => {
    const schema = Joi.object({
        email: Joi.string().trim().email().required(),
        password: Joi.string().trim().min(6).required(),
    });

    return schema.validate(payload);
};
