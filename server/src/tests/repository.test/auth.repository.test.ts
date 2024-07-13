import { User } from "@prisma/client";
import { RegisterPayload } from "../../types/auth.type";
import prisma from "../../utils/prisma";
import { login, register, verify } from "../../repositories/auth.repository";

prisma.$transaction = jest.fn().mockImplementation((cb) => cb(prisma));

jest.mock("../../utils/prisma", () => ({
    __esModule: true,
    default: {
        user: {
            findUnique: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
        },
        profile: {
            create: jest.fn(),
        },
    },
}));

describe("auth repository test", () => {
    it("register", async () => {
        const mockPayload: RegisterPayload = {
            username: "1",
            email: "1",
            password: "1",
        };

        const mockData: User = {
            id: "1",
            username: mockPayload.username,
            email: mockPayload.email,
            password: mockPayload.password,
            role: "USER",
            verified: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        await prisma.$transaction(async (prisma) => {
            (prisma.user.create as jest.Mock).mockResolvedValue(mockData);
            (prisma.profile.create as jest.Mock).mockResolvedValue(undefined);
        });

        const result = await register(mockPayload);

        expect(result).toEqual(mockData.id);
    });

    it("verify", async () => {
        const mockId = "1";

        (prisma.user.update as jest.Mock).mockResolvedValue(undefined);

        await verify(mockId);
    });

    it("login", async () => {
        const mockEmail = "1";

        const mockData: User = {
            id: "1",
            username: "1",
            email: mockEmail,
            password: "1",
            role: "USER",
            verified: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        (prisma.user.findUnique as jest.Mock).mockResolvedValue(mockData);

        const result = await login(mockEmail);

        expect(result).toEqual(mockData);
    });
});
