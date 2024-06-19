export interface ReviewType {
    id: string;
    productId: string;
    review: [
        {
            userId: string;
            rating: number;
            comment: string;
            createdAt: Date;
            updatedAt: Date;
        }
    ];
}
