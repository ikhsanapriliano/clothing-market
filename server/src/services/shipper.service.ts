import { Shipper } from "@prisma/client";
import {
    create,
    findAll,
    remove,
    update,
} from "../repositories/shipper.repository";
import { ShipperPayload } from "../types/shipper.type";

export const findAllShipper = async (): Promise<Shipper[]> => {
    const data = await findAll();

    return data;
};

export const createShipper = async (
    payload: ShipperPayload
): Promise<Shipper> => {
    const data = await create(payload);

    return data;
};

export const updateShipper = async (
    id: string,
    payload: ShipperPayload
): Promise<string> => {
    const data = await update(id, payload);

    return data;
};

export const removeShipper = async (id: string): Promise<string> => {
    const data = await remove(id);

    return data;
};
