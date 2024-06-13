import { User } from "@prisma/client";
import {
    change,
    findById,
    remove,
    update,
} from "../../repositories/user.repository";
import {
    changePassword,
    findByIdUser,
    removeUser,
    updateProfile,
} from "../../services/user.service";
import { changePasswordPayload, profilePayload } from "../../types/user.type";
import { encrypt } from "../../utils/bcrypt";

jest.mock("../../repositories/user.repository");

describe("user service test", () => {
    it("find by id user", async () => {
        const mockId = "1";

        const mockData: User = {
            id: mockId,
            username: "1",
            email: "1",
            password: "1",
            role: "USER",
            verified: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        (findById as jest.Mock).mockResolvedValue(mockData);

        const result = await findByIdUser(mockId);

        expect(result).toEqual(mockData);
    });

    it("change password", async () => {
        const mockId = "1";
        const mockPayload: changePasswordPayload = {
            currentPassword: "111111",
            newPassword: "222222",
        };

        const mockUser: User = {
            id: mockId,
            username: "1",
            email: "1",
            password: encrypt(mockPayload.currentPassword),
            role: "USER",
            verified: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        const mockData = "change password success";

        (findById as jest.Mock).mockResolvedValue(mockUser);
        (change as jest.Mock).mockResolvedValue(undefined);

        const result = await changePassword(mockId, mockPayload);

        expect(result).toEqual(mockData);
    });

    it("update profile", async () => {
        const mockId = "1";
        const mockPayload: profilePayload = {};

        const mockUser: User = {
            id: mockId,
            username: "1",
            email: "1",
            password: "1",
            role: "USER",
            verified: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        const mockData = `user with id ${mockId} successfully updated`;

        (findById as jest.Mock).mockResolvedValue(mockUser);
        (update as jest.Mock).mockResolvedValue(undefined);

        const result = await updateProfile(mockId, mockPayload);

        expect(result).toEqual(mockData);
    });

    it("remove user", async () => {
        const mockId = "1";

        const mockUser: User = {
            id: mockId,
            username: "1",
            email: "1",
            password: "1",
            role: "USER",
            verified: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        const mockData = `user with id ${mockId} successfully deleted`;

        (findById as jest.Mock).mockResolvedValue(mockUser);
        (remove as jest.Mock).mockResolvedValue(undefined);

        const result = await removeUser(mockId);

        expect(result).toEqual(mockData);
    });
});
