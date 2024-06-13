import { User } from "@prisma/client";
import prisma from "../../utils/prisma";
import {
    change,
    findById,
    remove,
    update,
} from "../../repositories/user.repository";
import { profilePayload } from "../../types/user.type";

prisma.$transaction = jest.fn().mockImplementation((cb) => cb(prisma));

jest.mock("../../utils/prisma", () => ({
    __esModule: true,
    default: {
        user: {
            findUnique: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
        profile: {
            update: jest.fn(),
        },
    },
}));

describe("user repository test", () => {
    it("find by id", async () => {
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

        (prisma.user.findUnique as jest.Mock).mockResolvedValue(mockData);

        const result = await findById(mockId);

        expect(result).toEqual(mockData);
    });

    it("change", async () => {
        const mockId = "1";
        const mockPassword = "1";

        (prisma.user.update as jest.Mock).mockResolvedValue(undefined);

        await change(mockId, mockPassword);
    });

    it("update", async () => {
        const mockId = "1";
        const mockPayload: profilePayload = {};

        await prisma.$transaction(async (prisma) => {
            (prisma.user.update as jest.Mock).mockResolvedValue(undefined);
            (prisma.profile.update as jest.Mock).mockResolvedValue(undefined);
        });

        await update(mockId, mockPayload);
    });

    it("remove", async () => {
        const mockId = "1";

        (prisma.user.delete as jest.Mock).mockResolvedValue(undefined);

        await remove(mockId);
    });
});
