export interface ReviewType {
    productId: string;
    review?: [
        {
            userId: string;
            rating: number;
            comment: string;
            createdAt: Date;
            updatedAt: Date;
        }
    ];
}

export interface ReviewSingleDto {
    rating: number;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ReviewPayload {
    productId: string;
    rating: number;
    comment: string;
}
