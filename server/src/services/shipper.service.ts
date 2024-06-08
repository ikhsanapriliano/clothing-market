import { Shipper } from "@prisma/client";
import {
    create,
    findAll,
    remove,
    update,
} from "@/repositories/shipper.repository";
import { ShipperPayload } from "@/types/shipper.type";
import { shipperPayloadValidation } from "@/validations/shipper.validation";

export const findAllShipper = async (): Promise<Shipper[]> => {
    const data = await findAll();

    return data;
};

export const createShipper = async (
    payload: ShipperPayload
): Promise<Shipper> => {
    const { value, error } = shipperPayloadValidation(payload);
    if (error != undefined) throw new Error("invalid input");

    const data = await create(value);

    return data;
};

export const updateShipper = async (
    id: string,
    payload: ShipperPayload
): Promise<string> => {
    const { value, error } = shipperPayloadValidation(payload);
    if (error != undefined) throw new Error("invalid input");

    const data = await update(id, value);

    return data;
};

export const removeShipper = async (id: string): Promise<string> => {
    const data = await remove(id);

    return data;
};
