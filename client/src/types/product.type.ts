export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    sold: number;
    categoryId: string;
    storeId: string;
    createdAt: Date;
    updatedAt: Date;
    productPhoto: string[];
}
