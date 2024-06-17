import { Category } from "@prisma/client";
import prisma from "../../utils/prisma";
import { findByName } from "../../repositories/category.repository";

jest.mock("../../utils/prisma", () => ({
    __esModule: true,
    default: {
        category: {
            findUnique: jest.fn(),
        },
    },
}));

describe("category repository test", () => {
    it("find by name", async () => {
        const mockName = "1";
        const mockData: Category = {
            id: "1",
            name: mockName,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        (prisma.category.findUnique as jest.Mock).mockResolvedValue(mockData);

        const result = await findByName(mockName);
        expect(result).toEqual(mockData);
    });
});
