import {
    findAllStoreHandler,
    findByIdStoreHandler,
    createStoreHandler,
    updateStoreHandler,
    removeStoreHandler,
} from "../../controllers/store.controller";
import {
    findAllStore,
    findByIdStore,
    createStore,
    updateStore,
    removeStore,
} from "../../services/store.service";
import { ResponseType } from "../../types/common.type";
import { Store } from "@prisma/client";
import { Request, Response } from "express";

jest.mock("../../services/store.service");

describe("store controller test", () => {
    it("find all store handler", async () => {
        const mockData: Store[] = [];

        (findAllStore as jest.Mock).mockResolvedValue(mockData);

        const mockResponse: ResponseType = {
            status: 200,
            message: "success",
            data: mockData,
        };

        const mockReq: Request = {
            query: {
                limit: "1",
            },
        } as unknown as Request;
        const mockRes: Response = {
            json: jest.fn(),
        } as unknown as Response;
        const mockNext = jest.fn();

        await findAllStoreHandler(mockReq, mockRes, mockNext);

        expect(mockRes.json).toHaveBeenCalledWith(mockResponse);
    });

    it("find by id store handler", async () => {
        const mockId = "1";
        const mockData: Store = {
            id: "1",
            name: "1",
            address: "1",
            description: "1",
            photo: "1",
            userId: "1",
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        (findByIdStore as jest.Mock).mockResolvedValue(mockData);

        const mockResponse: ResponseType = {
            status: 200,
            message: "success",
            data: mockData,
        };

        const mockReq: Request = {
            params: {
                id: mockId,
            },
        } as unknown as Request;
        const mockRes: Response = {
            json: jest.fn(),
        } as unknown as Response;
        const mockNext = jest.fn();

        await findByIdStoreHandler(mockReq, mockRes, mockNext);

        expect(mockRes.json).toHaveBeenCalledWith(mockResponse);
    });

    it("create store handler", async () => {
        const mockId = "1";
        const mockData = `store successfully created`;

        (createStore as jest.Mock).mockResolvedValue(mockData);

        const mockResponse: ResponseType = {
            status: 201,
            message: "success",
            data: mockData,
        };

        const mockReq: Request = {} as Request;
        const mockRes: Response = {
            json: jest.fn(),
            locals: {
                userId: mockId,
            },
        } as unknown as Response;
        const mockNext = jest.fn();

        await createStoreHandler(mockReq, mockRes, mockNext);

        expect(mockRes.json).toHaveBeenCalledWith(mockResponse);
    });

    it("update store handler", async () => {
        const mockId = "1";
        const mockData = `store successfully updated`;

        (updateStore as jest.Mock).mockResolvedValue(mockData);

        const mockResponse: ResponseType = {
            status: 200,
            message: "success",
            data: mockData,
        };

        const mockReq: Request = {} as Request;
        const mockRes: Response = {
            json: jest.fn(),
            locals: {
                userId: mockId,
            },
        } as unknown as Response;
        const mockNext = jest.fn();

        await updateStoreHandler(mockReq, mockRes, mockNext);

        expect(mockRes.json).toHaveBeenCalledWith(mockResponse);
    });

    it("remove store handler", async () => {
        const mockId = "1";
        const mockData = `store successfully updated`;

        (removeStore as jest.Mock).mockResolvedValue(mockData);

        const mockResponse: ResponseType = {
            status: 200,
            message: "success",
            data: mockData,
        };

        const mockReq: Request = {} as Request;
        const mockRes: Response = {
            json: jest.fn(),
            locals: {
                userId: mockId,
            },
        } as unknown as Response;
        const mockNext = jest.fn();

        await removeStoreHandler(mockReq, mockRes, mockNext);

        expect(mockRes.json).toHaveBeenCalledWith(mockResponse);
    });
});
