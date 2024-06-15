import { Product, Util } from "@prisma/client";
import prisma from "../utils/prisma";
import {
    ColorPayload,
    ProductPhotoPayload,
    ProductInputCreate,
    ProductPayloadUpdate,
    SizePayload,
    UtilityPayload,
} from "../types/product.type";

export const findAll = async (): Promise<Product[]> => {
    const data = await prisma.product.findMany({
        include: {
            category: true,
            utility: true,
            size: true,
            productPhotos: true,
            color: true,
        },
    });

    return data;
};

export const findById = async (id: string): Promise<Product | null> => {
    const data = await prisma.product.findUnique({
        where: {
            id,
        },
        include: {
            category: true,
            utility: true,
            size: true,
            productPhotos: true,
            color: true,
        },
    });

    return data;
};

export const findByStoreId = async (storeId: string): Promise<Product[]> => {
    const data = await prisma.product.findMany({
        where: {
            storeId,
        },
        include: {
            category: true,
            utility: true,
            size: true,
            productPhotos: true,
            color: true,
        },
    });

    return data;
};

export const findByIdAndStoreId = async (
    id: string,
    storeId: string
): Promise<Product | null> => {
    const data = await prisma.product.findUnique({
        where: {
            id,
            storeId,
        },
        include: {
            category: true,
            utility: true,
            size: true,
            productPhotos: true,
            color: true,
        },
    });

    return data;
};

export const create = async (
    storeId: string,
    payload: ProductInputCreate
): Promise<void> => {
    await prisma.$transaction(async (prisma) => {
        const { id } = await prisma.product.create({
            data: {
                name: payload.name,
                description: payload.description,
                price: payload.price,
                stock: payload.stock,
                categoryId: payload.category,
                storeId: storeId,
            },
            select: {
                id: true,
            },
        });

        const utilities: UtilityPayload[] = payload.utility.map((utility) => ({
            name: utility as Util,
            productId: id,
        }));

        await prisma.utility.createMany({
            data: utilities,
        });

        const colors: ColorPayload[] = payload.color.map((color) => ({
            name: color.name,
            code: color.code,
            productId: id,
        }));

        await prisma.color.createMany({
            data: colors,
        });

        const sizes: SizePayload[] = payload.size.map((size) => ({
            name: size,
            productId: id,
        }));

        await prisma.size.createMany({
            data: sizes,
        });

        const photos: ProductPhotoPayload[] = payload.photo.map((photo) => ({
            photo,
            productId: id,
        }));

        await prisma.productPhoto.createMany({
            data: photos,
        });
    });
};

export const update = async (
    product?: ProductPayloadUpdate,
    utilities?: UtilityPayload[],
    colors?: ColorPayload[],
    sizes?: SizePayload[],
    photos?: ProductPhotoPayload[]
): Promise<void> => {
    await prisma.$transaction(async (prisma) => {
        if (product !== undefined) {
            await prisma.product.update({
                where: {
                    id: product.id,
                },
                data: {
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    stock: product.stock,
                    categoryId: product.category,
                },
            });
        }

        if (utilities !== undefined) {
            utilities.forEach(async (utility) => {
                await prisma.utility.upsert({
                    where: {
                        id: utility.id,
                    },
                    update: {
                        name: utility.name,
                    },
                    create: {
                        name: utility.name,
                        productId: utility.productId,
                    },
                });
            });
        }

        if (colors !== undefined) {
            colors.forEach(async (color) => {
                await prisma.color.upsert({
                    where: {
                        id: color.id,
                    },
                    update: {
                        name: color.name,
                        code: color.code,
                    },
                    create: {
                        name: color.name,
                        code: color.code,
                        productId: color.productId,
                    },
                });
            });
        }

        if (sizes !== undefined) {
            sizes.forEach(async (size) => {
                await prisma.size.upsert({
                    where: {
                        id: size.id,
                    },
                    update: {
                        name: size.name,
                    },
                    create: {
                        name: size.name,
                        productId: size.productId,
                    },
                });
            });
        }

        if (photos !== undefined) {
            photos.forEach(async (photo) => {
                await prisma.productPhoto.upsert({
                    where: {
                        id: photo.id,
                    },
                    update: {
                        photo: photo.photo,
                    },
                    create: {
                        photo: photo.photo,
                        productId: photo.productId,
                    },
                });
            });
        }
    });
};

export const remove = async (id: string): Promise<void> => {
    await prisma.product.delete({
        where: {
            id,
        },
    });
};
