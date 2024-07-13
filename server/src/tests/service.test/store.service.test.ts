import { Store } from "@prisma/client";
import {
    findAllStore,
    findByIdStore,
    findByUserIdStore,
    createStore,
    updateStore,
    removeStore,
} from "../../services/store.service";
import {
    findAll,
    findById,
    findByUserId,
    create,
    update,
    remove,
} from "../../repositories/store.repository";
import { findByIdUser } from "../../services/user.service";
import { StorePayload } from "../../types/store.type";

jest.mock("../../repositories/store.repository");
jest.mock("../../services/user.service");

describe("store service test", () => {
    it("find all store", async () => {
        const mockData: Store[] = [];

        (findAll as jest.Mock).mockResolvedValue(mockData);

        const result = await findAllStore();
        expect(result).toEqual(mockData);
    });

    it("find by id store", async () => {
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

        (findById as jest.Mock).mockResolvedValue(mockData);

        const result = await findByIdStore(mockId);
        expect(result).toEqual(mockData);
    });

    it("find by user id store", async () => {
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

        (findByUserId as jest.Mock).mockResolvedValue(mockData);

        const result = await findByUserIdStore(mockUserId);
        expect(result).toEqual(mockData);
    });

    it("create store", async () => {
        const mockUserId = "1";
        const mockPayload: StorePayload = {
            name: "1",
            address: "1",
            description: "1",
            photo: "1",
        };
        const mockData = `store successfully created`;

        (findByIdUser as jest.Mock).mockResolvedValue(undefined);
        (findByUserId as jest.Mock).mockResolvedValue(null);
        (create as jest.Mock).mockResolvedValue(undefined);

        const result = await createStore(mockUserId, mockPayload);
        expect(result).toEqual(mockData);
    });

    it("update store", async () => {
        const mockUserId = "1";
        const mockUser: Store = {
            id: "1",
            name: "1",
            address: "1",
            description: "1",
            photo: "1",
            userId: mockUserId,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        const mockPayload: StorePayload = {
            name: "1",
            address: "1",
            description: "1",
            photo: "1",
        };
        const mockData = `store successfully updated`;

        (findByUserId as jest.Mock).mockResolvedValue(mockUser);
        (update as jest.Mock).mockResolvedValue(undefined);

        const result = await updateStore(mockUserId, mockPayload);
        expect(result).toEqual(mockData);
    });

    it("remove store", async () => {
        const mockUserId = "1";
        const mockUser: Store = {
            id: "1",
            name: "1",
            address: "1",
            description: "1",
            photo: "1",
            userId: mockUserId,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        const mockData = `store successfully deleted`;

        (findByUserId as jest.Mock).mockResolvedValue(mockUser);
        (remove as jest.Mock).mockResolvedValue(undefined);

        const result = await removeStore(mockUserId);
        expect(result).toEqual(mockData);
    });
});
