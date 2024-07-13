import {
    findAll,
    create,
    update,
    remove,
} from "../../repositories/shipper.repository";
import { ShipperPayload } from "../../types/shipper.type";
import prisma from "../../utils/prisma";
import { Shipper } from "@prisma/client";

jest.mock("../../utils/prisma", () => ({
    __esModule: true,
    default: {
        shipper: {
            findMany: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
    },
}));

describe("shipper repository test", () => {
    it("find all", async () => {
        const mockOutput: Shipper[] = [
            {
                id: "1",
                service: "1",
                fee: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: "2",
                service: "2",
                fee: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ];

        (prisma.shipper.findMany as jest.Mock).mockResolvedValue(mockOutput);

        const result = await findAll();

        expect(result).toEqual(mockOutput);
    });

    it("create", async () => {
        const mockPayload: ShipperPayload = {
            service: "1",
            fee: 1,
        };

        const mockOutput: Shipper = {
            id: "1",
            service: mockPayload.service,
            fee: mockPayload.fee,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        (prisma.shipper.create as jest.Mock).mockResolvedValue(mockOutput);

        const result = await create(mockPayload);

        expect(result).toEqual(result);
    });

    it("update", async () => {
        const mockId: string = "1";
        const mockPayload: ShipperPayload = {
            service: "1",
            fee: 1,
        };

        const mockOutput: string = `shipper with id ${mockId} successfully updated`;

        prisma.shipper.update as jest.Mock;

        const result: string = await update(mockId, mockPayload);

        expect(result).toBe(mockOutput);
    });

    it("delete", async () => {
        const mockId: string = "1";

        const mockOutput: string = `shipper with id ${mockId} successfully deleted`;

        prisma.shipper.delete as jest.Mock;

        const result: string = await remove(mockId);

        expect(result).toBe(mockOutput);
    });
});
