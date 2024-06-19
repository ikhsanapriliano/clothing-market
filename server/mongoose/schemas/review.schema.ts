import { Schema } from "mongoose";
import { ReviewType } from "../../src/types/reviews.type";
import { randomUUID } from "crypto";

const reviewSchema = new Schema<ReviewType>({
    id: { type: String, default: randomUUID },
    productId: { type: String, unique: true },
    review: [
        {
            userId: { type: String, unique: true },
            rating: Number,
            comment: String,
            createdAt: Date,
            updatedAt: Date,
        },
    ],
});

export default reviewSchema;
