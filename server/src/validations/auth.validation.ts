import Joi from "joi";
import { registerInput } from "../types/auth.type";

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
