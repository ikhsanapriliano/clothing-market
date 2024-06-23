import {
    add,
    create,
    edit,
    findByProductIdAndUserId,
    remove,
} from "../repositories/review.repository";
import { ReviewPayload, ReviewSingleDto } from "../types/review.type";
import { reviewPayloadValidation } from "../validations/review.validation";

export const findByProductIdAndUserIdReview = async (
    productId: string,
    userId: string
): Promise<ReviewSingleDto | undefined> => {
    const data = await findByProductIdAndUserId(productId, userId);
    if (data === null)
        throw new Error("400:you don't have a review for this product");

    if (data.review !== undefined) {
        const review: ReviewSingleDto = {
            rating: data.review[0].rating,
            comment: data.review[0].comment,
            createdAt: data.review[0].createdAt,
            updatedAt: data.review[0].updatedAt,
        };

        return review;
    }
};

export const createReview = async (productId: string): Promise<void> => {
    await create(productId);
};

export const addReview = async (
    userId: string,
    payload: ReviewPayload
): Promise<string> => {
    const { value, error } = reviewPayloadValidation(payload);
    if (error !== undefined) throw new Error(`400:${error.message}`);

    const review = findByProductIdAndUserIdReview(payload.productId, userId);
    if (review !== undefined)
        throw new Error("400:you already give a review for this product");

    await add(userId, value);
    const data = "review successfully added";

    return data;
};

export const editReview = async (
    userId: string,
    payload: ReviewPayload
): Promise<string> => {
    const { value, error } = reviewPayloadValidation(payload);
    if (error !== undefined) throw new Error(`400:${error.message}`);

    await findByProductIdAndUserIdReview(payload.productId, userId);

    await edit(userId, value);
    const data = "review successfully updated";

    return data;
};

export const removeReview = async (
    productId: string,
    userId: string
): Promise<string> => {
    await findByProductIdAndUserIdReview(productId, userId);

    await remove(productId, userId);
    const data = "review successfully deleted";

    return data;
};
