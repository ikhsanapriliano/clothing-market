import {
    findAllShipper,
    createShipper,
    updateShipper,
    removeShipper,
} from "../../services/shipper.service";
import {
    findById,
    findAll,
    create,
    update,
    remove,
} from "../../repositories/shipper.repository";
import { Shipper } from "@prisma/client";
import { ShipperPayload } from "../../types/shipper.type";

jest.mock("@/repositories/shipper.repository");

describe("shipper service test", () => {
    it("find all shipper", async () => {
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

        (findAll as jest.Mock).mockResolvedValue(mockOutput);

        const result: Shipper[] = await findAllShipper();

        expect(result).toEqual(mockOutput);
    });

    it("create shipper", async () => {
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

        (create as jest.Mock).mockResolvedValue(mockOutput);

        const result: Shipper = await createShipper(mockPayload);

        expect(result).toEqual(mockOutput);
    });

    it("update shipper", async () => {
        const mockId: string = "1";
        const mockPayload: ShipperPayload = {
            service: "1",
            fee: 1,
        };
        const mockShipper: Shipper = {
            id: mockId,
            service: "1",
            fee: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        const mockOutput: string = `shipper with id ${mockId} successfully updated`;

        (findById as jest.Mock).mockResolvedValue(mockShipper);
        (update as jest.Mock).mockResolvedValue(mockOutput);

        const result: string = await updateShipper(mockId, mockPayload);

        expect(result).toBe(mockOutput);
    });

    it("delete shipper", async () => {
        const mockId: string = "1";
        const mockOutput: string = `shipper with id ${mockId} successfully deleted`;
        const mockShipper: Shipper = {
            id: mockId,
            service: "1",
            fee: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        (findById as jest.Mock).mockResolvedValue(mockShipper);
        (remove as jest.Mock).mockResolvedValue(mockOutput);

        const result: string = await removeShipper(mockId);

        expect(result).toBe(mockOutput);
    });
});
