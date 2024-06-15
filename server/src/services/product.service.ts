import { Product } from "@prisma/client";
import {
    findAll,
    findById,
    findByStoreId,
    create,
    update,
    remove,
    findByIdAndStoreId,
} from "../repositories/product.repository";
import {
    ColorPayload,
    ProductPhotoPayload,
    ProductInputCreate,
    ProductInputUpdate,
    ProductPayloadUpdate,
    SizePayload,
    UtilityPayload,
} from "../types/product.type";
import {
    productInputCreateValidation,
    productInputUpdateValidation,
} from "../validations/product.validation";
import { findByUserIdStore } from "./store.service";
import { findByNameCategory } from "./category.service";

export const findAllProduct = async (): Promise<Product[]> => {
    const data = await findAll();

    return data;
};

export const findByIdProduct = async (id: string): Promise<Product> => {
    const data = await findById(id);
    if (data === null) throw new Error(`product with id ${id} not found`);

    return data;
};

export const findByStoreIdProduct = async (
    storeId: string
): Promise<Product[]> => {
    const data = await findByStoreId(storeId);

    return data;
};

export const findByIdAndStoreIdProduct = async (
    id: string,
    storeId: string
): Promise<Product> => {
    const product = await findByIdAndStoreId(id, storeId);
    if (product == null)
        throw new Error(`400:your store doesn't have the product`);

    return product;
};

export const createProduct = async (
    userId: string,
    payload: ProductInputCreate
): Promise<string> => {
    const { value, error } = productInputCreateValidation(payload);
    if (error !== undefined) throw new Error(`400:${error.message}`);

    const store = await findByUserIdStore(userId);

    await create(store.id, value);
    const data = `product successfully created`;

    return data;
};

export const updateProduct = async (
    userId: string,
    id: string,
    payload: ProductInputUpdate
): Promise<string> => {
    const { value, error } = productInputUpdateValidation(payload);
    if (error !== undefined) throw new Error(`400:${error.message}`);

    const store = await findByUserIdStore(userId);
    await findByIdAndStoreIdProduct(id, store.id);

    let product: ProductPayloadUpdate | undefined = undefined;
    let utilities: UtilityPayload[] | undefined = undefined;
    let colors: ColorPayload[] | undefined = undefined;
    let sizes: SizePayload[] | undefined = undefined;
    let photos: ProductPhotoPayload[] | undefined = undefined;

    if (
        value.name !== undefined ||
        value.description !== undefined ||
        value.price !== undefined ||
        value.stock !== undefined ||
        value.category !== undefined
    ) {
        if (value.category !== undefined) {
            const category = await findByNameCategory(value.category);
            value.category = category.id;
        }

        product = {
            id,
            name: payload.name,
            description: payload.description,
            price: payload.price,
            stock: payload.stock,
            category: payload.category,
        };
    }

    if (value.utility !== undefined) {
        utilities = value.utility.map((utility) => ({
            id: utility.id,
            name: utility.name,
            productId: id,
        }));
    }

    if (value.color !== undefined) {
        colors = value.color.map((color) => ({
            id: color.id,
            name: color.name,
            code: color.code,
            productId: id,
        }));
    }

    if (value.size !== undefined) {
        sizes = value.size.map((size) => ({
            id: size.id,
            name: size.name,
            productId: id,
        }));
    }

    if (value.photo !== undefined) {
        photos = value.photo.map((photo) => ({
            id: photo.id,
            photo: photo.photo,
            productId: id,
        }));
    }

    await update(product, utilities, colors, sizes, photos);
    const data = `product successfully updated`;

    return data;
};

export const removeProduct = async (
    userId: string,
    id: string
): Promise<string> => {
    const store = await findByUserIdStore(userId);
    await findByIdAndStoreIdProduct(id, store.id);

    await remove(id);
    const data = `product successfully deleted`;

    return data;
};
