import { Util } from "@prisma/client";

export interface ProductInputCreate {
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
    utility: string[];
    size: string[];
    photo: string[];
    color: [{ name: string; code: string }];
}

export interface ProductInputUpdate {
    name?: string;
    description?: string;
    price?: number;
    stock?: number;
    category?: string;
    utility?: [
        {
            id?: string;
            name: Util;
        }
    ];
    size?: [
        {
            id?: string;
            name: string;
        }
    ];
    photo?: [
        {
            id?: string;
            photo: string;
        }
    ];
    color?: [
        {
            id?: string;
            name: string;
            code: string;
        }
    ];
}

export interface ProductPayloadUpdate {
    id: string;
    name?: string;
    description?: string;
    price?: number;
    stock?: number;
    category?: string;
}

export interface UtilityPayload {
    id?: string;
    name: Util;
    productId: string;
}

export interface ColorPayload {
    id?: string;
    name: string;
    code: string;
    productId: string;
}

export interface SizePayload {
    id?: string;
    name: string;
    productId: string;
}

export interface ProductPhotoPayload {
    id?: string;
    photo: string;
    productId: string;
}
