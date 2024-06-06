import { Shipper } from "@prisma/client";
import prisma from "../utils/prisma";
import { ShipperPayload } from "../types/shipper.type";

export const findAll = async (): Promise<Shipper[]> => {
    const data = await prisma.shipper.findMany();

    return data;
};

export const create = async (payload: ShipperPayload): Promise<Shipper> => {
    const data = await prisma.shipper.create({
        data: payload,
    });

    return data;
};

export const update = async (
    id: string,
    payload: ShipperPayload
): Promise<string> => {
    await prisma.shipper.update({
        where: {
            id,
        },
        data: payload,
    });
    const data = `shipper with id ${id} successfully updated`;

    return data;
};

export const remove = async (id: string): Promise<string> => {
    await prisma.shipper.delete({
        where: {
            id,
        },
    });
    const data = `shipper with id ${id} successfully deleted`;

    return data;
};
