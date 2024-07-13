import Joi, { ref } from "joi";
import { StorePayload } from "../types/store.type";

export const storePayloadValidation = (
    action: string,
    payload: StorePayload
): Joi.ValidationResult<StorePayload> => {
    const schema = Joi.object({
        name: Joi.string().trim().when(Joi.ref("$action"), {
            is: "create",
            then: Joi.required(),
            otherwise: Joi.optional(),
        }),
        address: Joi.string().trim().when(Joi.ref("$action"), {
            is: "create",
            then: Joi.required(),
            otherwise: Joi.optional(),
        }),
        description: Joi.string().trim().when(Joi.ref("$action"), {
            is: "create",
            then: Joi.required(),
            otherwise: Joi.optional(),
        }),
        photo: Joi.string().trim().when(Joi.ref("$action"), {
            is: "create",
            then: Joi.required(),
            otherwise: Joi.optional(),
        }),
    });

    return schema.validate(payload, { context: { action } });
};
