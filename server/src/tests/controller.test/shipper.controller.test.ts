import {
    findAllShipperHandler,
    createShipperHandler,
    updateShipperHandler,
    removeShipperHandler,
} from "../../controllers/shipper.controller";
import {
    findAllShipper,
    createShipper,
    updateShipper,
    removeShipper,
} from "../../services/shipper.service";
import { ResponseType } from "../../types/common.type";
import { Shipper } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

jest.mock("@/services/shipper.service");

describe("shipper controller test", () => {
    it("find all shipper handler", async () => {
        const mockData: Shipper[] = [
            {
                id: "1",
                service: "1",
                fee: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: "2",
                service: "2",
                fee: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ];

        (findAllShipper as jest.Mock).mockResolvedValue(mockData);

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

        await findAllShipperHandler(mockReq, mockRes, mockNext);

        expect(mockRes.json).toHaveBeenCalledWith(mockResponse);
    });

    it("create shipper handler", async () => {
        const mockData: Shipper = {
            id: "1",
            service: "1",
            fee: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        (createShipper as jest.Mock).mockResolvedValue(mockData);

        const mockResponse: ResponseType = {
            status: 201,
            message: "success",
            data: mockData,
        };

        const mockReq: Request = {} as Request;
        const mockRes: Response = {
            json: jest.fn(),
        } as unknown as Response;
        const mockNext = jest.fn();

        await createShipperHandler(mockReq, mockRes, mockNext);

        expect(mockRes.json).toHaveBeenCalledWith(mockResponse);
    });

    it("update shipper handler", async () => {
        const mockId: string = "1";
        const mockData: string = `shipper with id ${mockId} successfully updated`;

        (updateShipper as jest.Mock).mockResolvedValue(mockData);

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

        await updateShipperHandler(mockReq, mockRes, mockNext);

        expect(mockRes.json).toHaveBeenCalledWith(mockResponse);
    });

    it("remove shipper handler", async () => {
        const mockId: string = "1";
        const mockData: string = `shipper with id ${mockId} successfully deleted`;

        (removeShipper as jest.Mock).mockResolvedValue(mockData);

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

        await removeShipperHandler(mockReq, mockRes, mockNext);

        expect(mockRes.json).toHaveBeenCalledWith(mockResponse);
    });
});
