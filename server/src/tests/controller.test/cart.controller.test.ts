import { Cart } from "@prisma/client";
import { ResponseType } from "../../types/common.type";
import {
    createOrUpdateCart,
    findByUserIdAndProductIdCart,
    findByUserIdCart,
    removeCart,
} from "../../services/cart.service";
import {
    createOrUpdateCartHandler,
    findByUserIdAndProductIdCartHandler,
    findByUserIdCartHandler,
    removeCartHandler,
} from "../../controllers/cart.controller";
import { Request, Response } from "express";

jest.mock("../../services/cart.service");

describe("cart controller test", () => {
    it("find by user id cart handler", async () => {
        const mockData: Cart[] = [];

        (findByUserIdCart as jest.Mock).mockResolvedValue(mockData);

        const mockResponse: ResponseType = {
            status: 200,
            message: "success",
            data: mockData,
        };

        const mockReq: Request = {} as Request;
        const mockRes: Response = {
            json: jest.fn(),
            locals: {
                id: "1",
            },
        } as unknown as Response;
        const mockNext = jest.fn();

        await findByUserIdCartHandler(mockReq, mockRes, mockNext);

        expect(mockRes.json).toHaveBeenCalledWith(mockResponse);
    });

    it("find by user id and product id cart handler", async () => {
        const mockData: Cart = {} as unknown as Cart;

        (findByUserIdAndProductIdCart as jest.Mock).mockResolvedValue(mockData);

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
                id: "1",
            },
        } as unknown as Response;
        const mockNext = jest.fn();

        await findByUserIdAndProductIdCartHandler(mockReq, mockRes, mockNext);

        expect(mockRes.json).toHaveBeenCalledWith(mockResponse);
    });

    it("create or update cart handler", async () => {
        const mockData = "success";

        (createOrUpdateCart as jest.Mock).mockResolvedValue(mockData);

        const mockResponse: ResponseType = {
            status: 200,
            message: "success",
            data: mockData,
        };

        const mockReq: Request = {} as Request;
        const mockRes: Response = {
            json: jest.fn(),
            locals: {
                id: "1",
            },
        } as unknown as Response;
        const mockNext = jest.fn();

        await createOrUpdateCartHandler(mockReq, mockRes, mockNext);

        expect(mockRes.json).toHaveBeenCalledWith(mockResponse);
    });

    it("remove cart handler", async () => {
        const mockData = "success";

        (removeCart as jest.Mock).mockResolvedValue(mockData);

        const mockResponse: ResponseType = {
            status: 200,
            message: "success",
            data: mockData,
        };

        const mockReq: Request = {
            params: {
                id: "1",
            },
        } as unknown as Request;
        const mockRes: Response = {
            json: jest.fn(),
            locals: {
                id: "1",
            },
        } as unknown as Response;
        const mockNext = jest.fn();

        await removeCartHandler(mockReq, mockRes, mockNext);

        expect(mockRes.json).toHaveBeenCalledWith(mockResponse);
    });
});
