import {
    addReview,
    editReview,
    findByProductIdAndUserIdReview,
    removeReview,
} from "../../services/review.service";
import {
    findByProductIdAndUserIdReviewHandler,
    addReviewHandler,
    editReviewHandler,
    removeReviewHandler,
} from "../../controllers/review.controller";
import { ReviewSingleDto } from "../../types/review.type";
import { ResponseType } from "../../types/common.type";
import { Request, Response } from "express";

jest.mock("../../services/review.service");

describe("review controller test", () => {
    it("find by product id and user id review handler", async () => {
        const mockData = {} as ReviewSingleDto;

        (findByProductIdAndUserIdReview as jest.Mock).mockResolvedValue(
            mockData
        );

        const mockResponse: ResponseType = {
            status: 200,
            message: "success",
            data: mockData,
        };

        const mockReq: Request = {
            params: {
                productId: "1",
            },
        } as unknown as Request;
        const mockRes: Response = {
            json: jest.fn(),
            locals: {
                userId: "1",
            },
        } as unknown as Response;
        const mockNext = jest.fn();

        await findByProductIdAndUserIdReviewHandler(mockReq, mockRes, mockNext);

        expect(mockRes.json).toHaveBeenCalledWith(mockResponse);
    });

    it("add review handler", async () => {
        const mockData = "ok";

        (addReview as jest.Mock).mockResolvedValue(mockData);

        const mockResponse: ResponseType = {
            status: 201,
            message: "success",
            data: mockData,
        };

        const mockReq: Request = {} as unknown as Request;
        const mockRes: Response = {
            json: jest.fn(),
            locals: {
                userId: "1",
            },
        } as unknown as Response;
        const mockNext = jest.fn();

        await addReviewHandler(mockReq, mockRes, mockNext);

        expect(mockRes.json).toHaveBeenCalledWith(mockResponse);
    });

    it("edit review handler", async () => {
        const mockData = "ok";

        (editReview as jest.Mock).mockResolvedValue(mockData);

        const mockResponse: ResponseType = {
            status: 200,
            message: "success",
            data: mockData,
        };

        const mockReq: Request = {} as unknown as Request;
        const mockRes: Response = {
            json: jest.fn(),
            locals: {
                userId: "1",
            },
        } as unknown as Response;
        const mockNext = jest.fn();

        await editReviewHandler(mockReq, mockRes, mockNext);

        expect(mockRes.json).toHaveBeenCalledWith(mockResponse);
    });

    it("remove review handler", async () => {
        const mockData = "ok";

        (removeReview as jest.Mock).mockResolvedValue(mockData);

        const mockResponse: ResponseType = {
            status: 200,
            message: "success",
            data: mockData,
        };

        const mockReq: Request = {
            params: {
                productId: "1",
            },
        } as unknown as Request;
        const mockRes: Response = {
            json: jest.fn(),
            locals: {
                userId: "1",
            },
        } as unknown as Response;
        const mockNext = jest.fn();

        await removeReviewHandler(mockReq, mockRes, mockNext);

        expect(mockRes.json).toHaveBeenCalledWith(mockResponse);
    });
});
