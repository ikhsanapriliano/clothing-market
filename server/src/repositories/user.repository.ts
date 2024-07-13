import { User } from "@prisma/client";
import prisma from "../utils/prisma";
import { ProfilePayload } from "../types/user.type";

export const findById = async (id: string): Promise<User | null> => {
    const data = await prisma.user.findUnique({
        where: {
            id,
        },
        include: {
            profile: true,
        },
    });

    return data;
};

export const change = async (id: string, password: string): Promise<void> => {
    await prisma.user.update({
        where: {
            id,
        },
        data: {
            password,
        },
    });
};

export const update = async (
    userId: string,
    payload: ProfilePayload
): Promise<void> => {
    await prisma.$transaction(async (prisma) => {
        await prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                username: payload.username,
            },
        });

        await prisma.profile.update({
            where: {
                userId,
            },
            data: {
                firstName: payload.firstName,
                lastName: payload.lastName,
                phoneNumber: payload.phoneNumber,
                photo: payload.photo,
                address: payload.address,
                birthDate: payload.birthDate,
                gender: payload.gender,
            },
        });
    });
};

export const remove = async (id: string): Promise<void> => {
    await prisma.user.delete({
        where: {
            id,
        },
    });
};
