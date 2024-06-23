import { ReviewPayload, ReviewType } from "../types/review.type";
import mongoose from "../utils/mongoose";

export const findByProductIdAndUserId = async (
    productId: string,
    userId: string
): Promise<ReviewType | null> => {
    const data = await mongoose.review.findOne(
        {
            productId,
            "review.userId": userId,
        },
        {
            "review.$": 1,
        }
    );

    return data;
};

export const create = async (productId: string): Promise<void> => {
    const newReview = new mongoose.review<ReviewType>({
        productId: productId,
        review: undefined,
    });

    await newReview.save();
};

export const add = async (
    userId: string,
    payload: ReviewPayload
): Promise<void> => {
    await mongoose.review.findOneAndUpdate(
        { productId: payload.productId },
        {
            $push: {
                review: {
                    userId: userId,
                    rating: payload.rating,
                    comment: payload.comment,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            },
        }
    );
};

export const edit = async (
    userId: string,
    payload: ReviewPayload
): Promise<void> => {
    await mongoose.review.findOneAndUpdate(
        {
            productId: payload.productId,
            "review.userId": userId,
        },
        {
            $set: {
                "review.$.rating": payload.rating,
                "review.$.comment": payload.comment,
                "review.$.updatedAt": new Date(),
            },
        }
    );
};

export const remove = async (
    productId: string,
    userId: string
): Promise<void> => {
    await mongoose.review.findOneAndUpdate(
        {
            productId: productId,
        },
        {
            $pull: {
                review: { userId },
            },
        }
    );
};
