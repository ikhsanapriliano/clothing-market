import { ShipperPayload } from "@/types/shipper.type";
import Joi from "joi";

export const shipperPayloadValidation = (
    payload: ShipperPayload
): Joi.ValidationResult<ShipperPayload> => {
    const schema = Joi.object({
        service: Joi.string().trim().required(),
        fee: Joi.number().min(0).required(),
    });

    return schema.validate(payload);
};
