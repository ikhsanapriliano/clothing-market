import { Schema } from "mongoose";
import { ReviewType } from "../../src/types/review.type";

const reviewSchema = new Schema<ReviewType>({
    productId: { type: String, unique: true, required: true },
    review: [
        {
            userId: { type: String, required: true },
            rating: { type: Number, required: true },
            comment: { type: String, required: true },
            createdAt: { type: Date, required: true },
            updatedAt: { type: Date, required: true },
        },
    ],
});

export default reviewSchema;
