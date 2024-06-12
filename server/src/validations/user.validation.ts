import { ShipperPayload } from "../types/shipper.type";
import Joi from "joi";
import { changePasswordPayload, profilePayload } from "../types/user.type";

export const changePasswordPayloadValidation = (
    payload: changePasswordPayload
): Joi.ValidationResult<changePasswordPayload> => {
    const schema = Joi.object({
        currentPassword: Joi.string().trim().min(6).required(),
        newPassword: Joi.string().trim().min(6).required(),
    });

    return schema.validate(payload);
};

export const profilePayloadValidation = (
    payload: profilePayload
): Joi.ValidationResult<profilePayload> => {
    const schema = Joi.object({
        username: Joi.string().trim(),
        firstName: Joi.string().trim(),
        lastName: Joi.string().trim(),
        phoneNumber: Joi.string().trim().min(9).max(13),
        photo: Joi.string().trim(),
        address: Joi.string().trim(),
        birthDate: Joi.string().trim(),
        gender: Joi.string().trim().valid("Male", "Female"),
    });

    return schema.validate(payload);
};
