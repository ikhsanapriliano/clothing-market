import Joi from "joi";
import { ReviewPayload } from "../types/review.type";

export const reviewPayloadValidation = (
    payload: ReviewPayload
): Joi.ValidationResult<ReviewPayload> => {
    const schema = Joi.object({
        productId: Joi.string().trim().required(),
        rating: Joi.number().min(1).max(5).required(),
        comment: Joi.string().trim().required(),
    });

    return schema.validate(payload);
};
