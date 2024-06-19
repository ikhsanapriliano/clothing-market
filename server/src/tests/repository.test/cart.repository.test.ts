import { Cart } from "@prisma/client";
import prisma from "../../utils/prisma";
import {
    findByUserId,
    findByIdAndUserId,
    findByUserIdAndProductId,
    create,
    update,
    remove,
} from "../../repositories/cart.repository";
import { CartPayload } from "../../types/cart.type";

jest.mock("../../utils/prisma", () => ({
    __esModule: true,
    default: {
        cart: {
            findMany: jest.fn(),
            findFirst: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
    },
}));

describe("cart repository test", () => {
    it("find by user id", async () => {
        const mockUserId = "1";
        const mockData = { userId: mockUserId } as unknown as Cart;

        (prisma.cart.findMany as jest.Mock).mockResolvedValue(mockData);

        const result = await findByUserId(mockUserId);
        expect(result).toEqual(mockData);
    });

    it("find by id and user id", async () => {
        const mockId = "1";
        const mockUserId = "1";
        const mockData = { id: mockId, userId: mockUserId } as unknown as Cart;

        (prisma.cart.findFirst as jest.Mock).mockResolvedValue(mockData);

        const result = await findByIdAndUserId(mockId, mockUserId);
        expect(result).toEqual(mockData);
    });

    it("find by user id and product id", async () => {
        const mockUserId = "1";
        const mockProductId = "1";
        const mockData = {
            productId: mockProductId,
            userId: mockUserId,
        } as unknown as Cart;

        (prisma.cart.findFirst as jest.Mock).mockResolvedValue(mockData);

        const result = await findByUserIdAndProductId(
            mockUserId,
            mockProductId
        );
        expect(result).toEqual(mockData);
    });

    it("create", async () => {
        const mockUserId = "1";
        const mockPayload = {} as unknown as CartPayload;

        prisma.cart.create as jest.Mock;

        await create(mockUserId, mockPayload);
    });

    it("update", async () => {
        const mockUserId = "1";
        const mockPayload = {} as unknown as CartPayload;

        prisma.cart.update as jest.Mock;

        await update(mockUserId, mockPayload);
    });

    it("remove", async () => {
        const mockId = "1";

        prisma.cart.delete as jest.Mock;

        await remove(mockId);
    });
});
