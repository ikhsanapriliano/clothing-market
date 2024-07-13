import { findByProductIdAndUserId } from "../../repositories/review.repository";
import { ReviewType } from "../../types/review.type";
import mongoose from "../../utils/mongoose";

jest.mock("../../utils/mongoose", () => ({
    __esModule: true,
    default: {
        review: {
            findOne: jest.fn(),
            save: jest.fn(),
        },
    },
}));

describe("review repository test", () => {
    it("find by product id and user id", async () => {
        const mockProductId = "1";
        const mockUserId = "1";
        const mockData: ReviewType = {
            productId: mockProductId,
        };

        (mongoose.review.findOne as jest.Mock).mockResolvedValue(mockData);

        const result = await findByProductIdAndUserId(
            mockProductId,
            mockUserId
        );
        expect(result).toEqual(mockData);
    });
});
