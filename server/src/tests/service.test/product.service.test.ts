import { Category, Product, Store, Util } from "@prisma/client";
import {
    findAll,
    findById,
    findByStoreId,
    findByIdAndStoreId,
    create,
    update,
    remove,
} from "../../repositories/product.repository";
import {
    createProduct,
    findAllProduct,
    findByIdProduct,
    findByStoreIdProduct,
    removeProduct,
    updateProduct,
} from "../../services/product.service";
import { findByIdStore, findByUserIdStore } from "../../services/store.service";
import {
    ProductInputCreate,
    ProductInputUpdate,
} from "../../types/product.type";
import { findByNameCategory } from "../../services/category.service";

jest.mock("../../repositories/product.repository");
jest.mock("../../services/store.service");
jest.mock("../../services/category.service");

describe("product service test", () => {
    it("find all product", async () => {
        const mockData: Product[] = [];

        (findAll as jest.Mock).mockResolvedValue(mockData);

        const result = await findAllProduct();
        expect(result).toEqual(result);
    });

    it("find by id product", async () => {
        const mockId = "1";
        const mockData = { id: mockId } as unknown as Product;

        (findById as jest.Mock).mockResolvedValue(mockData);

        const result = await findByIdProduct(mockId);
        expect(result).toEqual(result);
    });

    it("find by store id product", async () => {
        const mockStoreId = "1";
        const mockData: Product[] = [];

        (findByIdStore as jest.Mock).mockResolvedValue(undefined);
        (findByStoreId as jest.Mock).mockResolvedValue(mockData);

        const result = await findByStoreIdProduct(mockStoreId);
        expect(result).toEqual(result);
    });

    it("find by id and store id product", async () => {
        const mockId = "1";
        const mockStoreId = "1";
        const mockData = {
            id: mockId,
            storeId: mockStoreId,
        } as unknown as Product;

        (findByIdAndStoreId as jest.Mock).mockResolvedValue(mockData);

        const result = await findByIdAndStoreId(mockId, mockStoreId);
        expect(result).toEqual(result);
    });

    it("create product", async () => {
        const mockUserId = "1";
        const mockPayload: ProductInputCreate = {
            name: "1",
            description: "1",
            price: 12000,
            stock: 1,
            category: "1",
            utility: [],
            size: [],
            photo: [],
            color: [{ name: "1", code: "1" }],
        };
        const mockData = `product successfully created`;

        (findByNameCategory as jest.Mock).mockResolvedValue({
            id: "1",
        } as unknown as Category);
        (findByUserIdStore as jest.Mock).mockResolvedValue({
            id: "1",
        } as unknown as Store);
        create as jest.Mock;

        const result = await createProduct(mockUserId, mockPayload);
        expect(result).toEqual(mockData);
    });

    it("update product", async () => {
        const mockUserId = "1";
        const mockId = "1";
        const mockPayload: ProductInputUpdate = {
            name: "1",
            description: "1",
            price: 12000,
            stock: 1,
            category: "1",
            utility: [{ name: "Man" }],
            size: [{ name: "1" }],
            photo: [{ photo: "1" }],
            color: [{ name: "1", code: "1" }],
        };
        const mockStore = { id: "1" } as unknown as Store;
        const mockCategory = { id: "1" } as unknown as Category;
        const mockData = `product successfully updated`;

        (findByUserIdStore as jest.Mock).mockResolvedValue(mockStore);
        (findByIdAndStoreId as jest.Mock).mockResolvedValue({
            id: mockId,
            storeId: mockStore.id,
        } as unknown as Product);
        (findByNameCategory as jest.Mock).mockResolvedValue(mockCategory);
        update as jest.Mock;

        const result = await updateProduct(mockUserId, mockId, mockPayload);
        expect(result).toEqual(mockData);
    });

    it("remove product", async () => {
        const mockUserId = "1";
        const mockId = "1";
        const mockStore = { id: "1" } as unknown as Store;
        const mockData = `product successfully deleted`;

        (findByUserIdStore as jest.Mock).mockResolvedValue(mockStore);
        (findByIdAndStoreId as jest.Mock).mockResolvedValue({
            id: mockId,
            storeId: mockStore.id,
        } as unknown as Product);
        remove as jest.Mock;

        const result = await removeProduct(mockUserId, mockId);
        expect(result).toEqual(mockData);
    });
});
