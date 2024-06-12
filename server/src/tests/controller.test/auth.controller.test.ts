import { Request, Response } from "express";
import {
    loginUserHandler,
    registerUserHandler,
    verifyUserHandler,
} from "../../controllers/auth.controller";
import {
    loginUser,
    registerUser,
    verifyUser,
} from "../../services/auth.service";
import { ResponseType } from "../../types/common.type";

jest.mock("../../services/auth.service");

describe("auth controller test", () => {
    it("register user handler", async () => {
        const mockData = "register success";

        (registerUser as jest.Mock).mockResolvedValue(mockData);

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

        await registerUserHandler(mockReq, mockRes, mockNext);

        expect(mockRes.json).toHaveBeenCalledWith(mockResponse);
    });

    it("verify user handler", async () => {
        const mockData = "verify success";

        (verifyUser as jest.Mock).mockResolvedValue(mockData);

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

        await verifyUserHandler(mockReq, mockRes, mockNext);

        expect(mockRes.json).toHaveBeenCalledWith(mockResponse);
    });

    it("login user handler", async () => {
        const mockData = "login success";

        (loginUser as jest.Mock).mockResolvedValue(mockData);

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

        await loginUserHandler(mockReq, mockRes, mockNext);

        expect(mockRes.json).toHaveBeenCalledWith(mockResponse);
    });
});
