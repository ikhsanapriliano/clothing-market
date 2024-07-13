import { Shipper } from "@prisma/client";
import {
    create,
    findAll,
    findById,
    remove,
    update,
} from "../repositories/shipper.repository";
import { ShipperPayload } from "../types/shipper.type";
import { shipperPayloadValidation } from "../validations/shipper.validation";

export const findAllShipper = async (): Promise<Shipper[]> => {
    const data = await findAll();

    return data;
};

export const createShipper = async (
    payload: ShipperPayload
): Promise<Shipper> => {
    const { value, error } = shipperPayloadValidation(payload);
    if (error != undefined) throw new Error(`400:${error.message}`);

    const data = await create(value);

    return data;
};

export const updateShipper = async (
    id: string,
    payload: ShipperPayload
): Promise<string> => {
    const { value, error } = shipperPayloadValidation(payload);
    if (error != undefined) throw new Error(`400:${error.message}`);

    const shipper = await findById(id);
    if (shipper === null) throw new Error(`data with id ${id} not found`);

    const data = await update(shipper.id, value);

    return data;
};

export const removeShipper = async (id: string): Promise<string> => {
    const shipper = await findById(id);
    if (shipper === null) throw new Error(`data with id ${id} not found`);

    const data = await remove(shipper.id);

    return data;
};
