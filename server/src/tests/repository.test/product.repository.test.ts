import { Product } from "@prisma/client";
import prisma from "../../utils/prisma";
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
    ColorPayload,
    ProductInputCreate,
    ProductPayloadUpdate,
    ProductPhotoPayload,
    SizePayload,
    UtilityPayload,
} from "../../types/product.type";

prisma.$transaction = jest.fn().mockImplementation((cb) => cb(prisma));

jest.mock("../../utils/prisma", () => ({
    __esModule: true,
    default: {
        product: {
            findMany: jest.fn(),
            findUnique: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
        utility: {
            createMany: jest.fn(),
            upsert: jest.fn(),
        },
        color: {
            createMany: jest.fn(),
            upsert: jest.fn(),
        },
        size: {
            createMany: jest.fn(),
            upsert: jest.fn(),
        },
        productPhoto: {
            createMany: jest.fn(),
            upsert: jest.fn(),
        },
    },
}));

describe("product repository test", () => {
    it("find all", async () => {
        const mockData: Product[] = [];

        (prisma.product.findMany as jest.Mock).mockResolvedValue(mockData);

        const result = await findAll();
        expect(result).toEqual(mockData);
    });

    it("find by id", async () => {
        const mockId = "1";
        const mockData = {
            id: mockId,
        };

        (prisma.product.findUnique as jest.Mock).mockResolvedValue(mockData);

        const result = await findById(mockId);
        expect(result).toEqual(mockData);
    });

    it("find by store id", async () => {
        const mockStoreId = "1";
        const mockData: Product[] = [];

        (prisma.product.findUnique as jest.Mock).mockResolvedValue(mockData);

        const result = await findByStoreId(mockStoreId);
        expect(result).toEqual(mockData);
    });

    it("find by id and store id", async () => {
        const mockId = "1";
        const mockStoreId = "1";
        const mockData = {
            id: mockId,
            storeId: mockStoreId,
        };

        (prisma.product.findUnique as jest.Mock).mockResolvedValue(mockData);

        const result = await findByIdAndStoreId(mockId, mockStoreId);
        expect(result).toEqual(mockData);
    });

    it("create", async () => {
        const mockStoreId = "1";
        const payload = {
            utility: [],
            color: [],
            size: [],
            photo: [],
        } as unknown as ProductInputCreate;

        prisma.$transaction(async (prisma) => {
            (prisma.product.create as jest.Mock).mockResolvedValue({ id: "1" });
            prisma.utility.createMany as jest.Mock;
            prisma.color.createMany as jest.Mock;
            prisma.size.createMany as jest.Mock;
            prisma.productPhoto.createMany as jest.Mock;
        });

        await create(mockStoreId, payload);
    });

    it("update", async () => {
        const mockProduct = {} as unknown as ProductPayloadUpdate;
        const mockUtility: UtilityPayload[] = [];
        const mockColor: ColorPayload[] = [];
        const mockSize: SizePayload[] = [];
        const mockPhoto: ProductPhotoPayload[] = [];

        prisma.$transaction(async (prisma) => {
            prisma.product.update as jest.Mock;
            prisma.utility.upsert as jest.Mock;
            prisma.color.upsert as jest.Mock;
            prisma.size.upsert as jest.Mock;
            prisma.productPhoto.upsert as jest.Mock;
        });

        await update(mockProduct, mockUtility, mockColor, mockSize, mockPhoto);
    });

    it("remove", async () => {
        const mockId = "1";

        prisma.product.delete as jest.Mock;

        await remove(mockId);
    });
});
