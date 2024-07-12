import {
    add,
    edit,
    findByProductIdAndUserId,
    remove,
} from "../../repositories/review.repository";
import {
    findByProductIdAndUserIdReview,
    addReview,
    editReview,
    removeReview,
} from "../../services/review.service";
import { ReviewPayload, ReviewType } from "../../types/review.type";

jest.mock("../../repositories/review.repository");

describe("review service test", () => {
    it("find by product id and user id review", async () => {
        const mockProductId = "1";
        const mockUserId = "1";
        const mockReviewData: ReviewType = {
            productId: mockProductId,
            review: [
                {
                    userId: mockUserId,
                    rating: 1,
                    comment: "1",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
        };

        let mockReview = {};
        if (mockReviewData.review !== undefined) {
            mockReview = {
                rating: mockReviewData.review[0].rating,
                comment: mockReviewData.review[0].comment,
                createdAt: mockReviewData.review[0].createdAt,
                updatedAt: mockReviewData.review[0].updatedAt,
            };
        }

        (findByProductIdAndUserId as jest.Mock).mockResolvedValue(
            mockReviewData
        );

        const result = await findByProductIdAndUserIdReview(
            mockProductId,
            mockUserId
        );
        expect(result).toEqual(mockReview);
    });

    it("add review", async () => {
        const mockUserId = "1";
        const mockPayload: ReviewPayload = {
            productId: "1",
            rating: 1,
            comment: "1",
        };
        const mockReview: ReviewType = { productId: "1" };
        const mockData = "review successfully added";

        (findByProductIdAndUserId as jest.Mock).mockResolvedValue(mockReview);
        add as jest.Mock;

        const result = await addReview(mockUserId, mockPayload);
        expect(result).toEqual(mockData);
    });

    it("edit review", async () => {
        const mockUserId = "1";
        const mockPayload: ReviewPayload = {
            productId: "1",
            rating: 1,
            comment: "1",
        };
        const mockData = "review successfully updated";

        (findByProductIdAndUserId as jest.Mock).mockResolvedValue(
            {} as ReviewType
        );
        edit as jest.Mock;

        const result = await editReview(mockUserId, mockPayload);
        expect(result).toEqual(mockData);
    });

    it("remove review", async () => {
        const mockProductId = "1";
        const mockUserId = "1";
        const mockData = "review successfully deleted";

        (findByProductIdAndUserId as jest.Mock).mockResolvedValue(
            {} as ReviewType
        );
        remove as jest.Mock;

        const result = await removeReview(mockProductId, mockUserId);
        expect(result).toEqual(mockData);
    });
});
