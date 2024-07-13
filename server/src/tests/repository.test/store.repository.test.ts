import { Store } from "@prisma/client";
import {
    findAll,
    findById,
    findByUserId,
    create,
    update,
    remove,
} from "../../repositories/store.repository";
import prisma from "../../utils/prisma";
import { StorePayload } from "../../types/store.type";

jest.mock("../../utils/prisma", () => ({
    __esModule: true,
    default: {
        store: {
            findMany: jest.fn(),
            findUnique: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
    },
}));

describe("store repository test", () => {
    it("find all", async () => {
        const mockData: Store[] = [];

        (prisma.store.findMany as jest.Mock).mockResolvedValue(mockData);

        const result = await findAll();

        expect(result).toEqual(mockData);
    });

    it("find by id", async () => {
        const mockId = "1";
        const mockData: Store = {
            id: mockId,
            name: "1",
            address: "1",
            description: "1",
            photo: "1",
            userId: "1",
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        (prisma.store.findUnique as jest.Mock).mockResolvedValue(mockData);

        const result = await findById(mockId);
        expect(result).toEqual(mockData);
    });

    it("find by user id", async () => {
        const mockUserId = "1";
        const mockData: Store = {
            id: "1",
            name: "1",
            address: "1",
            description: "1",
            photo: "1",
            userId: mockUserId,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        (prisma.store.findUnique as jest.Mock).mockResolvedValue(mockData);

        const result = await findByUserId(mockUserId);
        expect(result).toEqual(mockData);
    });

    it("create", async () => {
        const mockUserId = "1";
        const mockPayload: StorePayload = {
            name: "1",
            address: "1",
            description: "1",
            photo: "1",
        };

        (prisma.store.create as jest.Mock).mockResolvedValue(undefined);

        await create(mockUserId, mockPayload);
    });

    it("update", async () => {
        const mockUserId = "1";
        const mockPayload: StorePayload = {
            name: "1",
            address: "1",
            description: "1",
            photo: "1",
        };

        (prisma.store.update as jest.Mock).mockResolvedValue(undefined);

        await update(mockUserId, mockPayload);
    });

    it("remove", async () => {
        const mockUserId = "1";

        (prisma.store.delete as jest.Mock).mockResolvedValue(undefined);

        await remove(mockUserId);
    });
});
