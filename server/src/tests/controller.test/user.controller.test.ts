import {
    findByIdUser,
    changePassword,
    updateProfile,
    removeUser,
} from "../../services/user.service";
import {
    findByIdUserHandler,
    changePasswordHandler,
    updateProfileHandler,
    removeUserHandler,
} from "../../controllers/user.controller";
import { ResponseType } from "../../types/common.type";
import { Request, Response } from "express";

jest.mock("../../services/user.service");

describe("user controller test", () => {
    it("find by id user handler", async () => {
        const mockData = "success";

        (findByIdUser as jest.Mock).mockResolvedValue(mockData);

        const mockResponse: ResponseType = {
            status: 200,
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

        await findByIdUserHandler(mockReq, mockRes, mockNext);

        expect(mockRes.json).toHaveBeenCalledWith(mockResponse);
    });

    it("change password handler", async () => {
        const mockData = "success";

        (changePassword as jest.Mock).mockResolvedValue(mockData);

        const mockResponse: ResponseType = {
            status: 200,
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

        await changePasswordHandler(mockReq, mockRes, mockNext);

        expect(mockRes.json).toHaveBeenCalledWith(mockResponse);
    });

    it("update profile handler", async () => {
        const mockData = "success";

        (updateProfile as jest.Mock).mockResolvedValue(mockData);

        const mockResponse: ResponseType = {
            status: 200,
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

        await updateProfileHandler(mockReq, mockRes, mockNext);

        expect(mockRes.json).toHaveBeenCalledWith(mockResponse);
    });

    it("remove user handler", async () => {
        const mockData = "success";

        (removeUser as jest.Mock).mockResolvedValue(mockData);

        const mockResponse: ResponseType = {
            status: 200,
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

        await removeUserHandler(mockReq, mockRes, mockNext);

        expect(mockRes.json).toHaveBeenCalledWith(mockResponse);
    });
});
