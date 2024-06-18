import { Product } from "@prisma/client";
import {
    createProduct,
    findAllProduct,
    findByIdProduct,
    findByStoreIdProduct,
    removeProduct,
    updateProduct,
} from "../../services/product.service";
import { ResponseType } from "../../types/common.type";
import {
    createProductHandler,
    findAllProductHandler,
    findByIdProductHandler,
    findByStoreIdProductHandler,
    removeProductHandler,
    updateProductHandler,
} from "../../controllers/product.controller";
import { Request, Response } from "express";

jest.mock("../../services/product.service");

describe("product controller test", () => {
    it("find all product handler", async () => {
        const mockData: Product[] = [];

        (findAllProduct as jest.Mock).mockResolvedValue(mockData);

        const mockResponse: ResponseType = {
            status: 200,
            message: "success",
            data: mockData,
        };

        const mockReq: Request = {} as Request;
        const mockRes: Response = {
            json: jest.fn(),
        } as unknown as Response;
        const mockNext = jest.fn();

        await findAllProductHandler(mockReq, mockRes, mockNext);

        expect(mockRes.json).toHaveBeenCalledWith(mockResponse);
    });

    it("find by id product handler", async () => {
        const mockData: Product = {} as Product;

        (findByIdProduct as jest.Mock).mockResolvedValue(mockData);

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
        } as unknown as Response;
        const mockNext = jest.fn();

        await findByIdProductHandler(mockReq, mockRes, mockNext);

        expect(mockRes.json).toHaveBeenCalledWith(mockResponse);
    });

    it("find by store id product handler", async () => {
        const mockData: Product[] = [];

        (findByStoreIdProduct as jest.Mock).mockResolvedValue(mockData);

        const mockResponse: ResponseType = {
            status: 200,
            message: "success",
            data: mockData,
        };

        const mockReq: Request = {
            params: {
                storeId: "1",
            },
        } as unknown as Request;
        const mockRes: Response = {
            json: jest.fn(),
        } as unknown as Response;
        const mockNext = jest.fn();

        await findByStoreIdProductHandler(mockReq, mockRes, mockNext);

        expect(mockRes.json).toHaveBeenCalledWith(mockResponse);
    });

    it("create product handler", async () => {
        const mockData = "success";

        (createProduct as jest.Mock).mockResolvedValue(mockData);

        const mockResponse: ResponseType = {
            status: 201,
            message: "success",
            data: mockData,
        };

        const mockReq: Request = {} as Request;
        const mockRes: Response = {
            json: jest.fn(),
            locals: {
                userId: "1",
            },
        } as unknown as Response;
        const mockNext = jest.fn();

        await createProductHandler(mockReq, mockRes, mockNext);

        expect(mockRes.json).toHaveBeenCalledWith(mockResponse);
    });

    it("update product handler", async () => {
        const mockData = "success";

        (updateProduct as jest.Mock).mockResolvedValue(mockData);

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
                userId: "1",
            },
        } as unknown as Response;
        const mockNext = jest.fn();

        await updateProductHandler(mockReq, mockRes, mockNext);

        expect(mockRes.json).toHaveBeenCalledWith(mockResponse);
    });

    it("remove product handler", async () => {
        const mockData = "success";

        (removeProduct as jest.Mock).mockResolvedValue(mockData);

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
                userId: "1",
            },
        } as unknown as Response;
        const mockNext = jest.fn();

        await removeProductHandler(mockReq, mockRes, mockNext);

        expect(mockRes.json).toHaveBeenCalledWith(mockResponse);
    });
});
