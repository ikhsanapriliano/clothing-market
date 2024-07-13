import { Category } from "@prisma/client";
import { findByName } from "../../repositories/category.repository";
import { findByNameCategory } from "../../services/category.service";

jest.mock("../../repositories/category.repository");

describe("category service test", () => {
    it("find by name category", async () => {
        const mockName = "1";
        const mockData: Category = {
            id: "1",
            name: mockName,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        (findByName as jest.Mock).mockResolvedValue(mockData);

        const result = await findByNameCategory(mockName);
        expect(result).toEqual(mockData);
    });
});
