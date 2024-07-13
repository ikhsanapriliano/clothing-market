import { Cart, Product } from "@prisma/client";
import {
    findByUserId,
    findByIdAndUserId,
    findByUserIdAndProductId,
    create,
    update,
    remove,
} from "../../repositories/cart.repository";
import {
    createOrUpdateCart,
    findByUserIdAndProductIdCart,
    findByUserIdCart,
    removeCart,
} from "../../services/cart.service";
import { CartPayload } from "../../types/cart.type";
import { findByIdProduct } from "../../services/product.service";
import { findByIdStore } from "../../services/store.service";

jest.mock("../../repositories/cart.repository");
jest.mock("../../services/product.service");
jest.mock("../../services/store.service");

describe("cart service test", () => {
    it("find by user id cart", async () => {
        const mockUserId = "1";
        const mockData: Cart[] = [];

        (findByUserId as jest.Mock).mockResolvedValue(mockData);

        const result = await findByUserIdCart(mockUserId);
        expect(result).toEqual(mockData);
    });

    it("find by user id and product id cart", async () => {
        const mockUserId = "1";
        const mockProductId = "1";
        const mockData = {} as unknown as Cart;

        (findByUserIdAndProductId as jest.Mock).mockResolvedValue(mockData);

        const result = await findByUserIdAndProductIdCart(
            mockUserId,
            mockProductId
        );
        expect(result).toEqual(mockData);
    });

    it("create or update cart", async () => {
        const mockUserId = "1";
        const mockPayload: CartPayload = {
            quantity: 1,
            productId: "1",
            storeId: "1",
        };
        const mockCart = {} as unknown as Cart;
        const mockData = "product successfully added to cart";

        (findByIdProduct as jest.Mock).mockResolvedValue({
            stock: 1,
        } as unknown as Product);
        findByIdStore as jest.Mock;
        (findByUserIdAndProductId as jest.Mock).mockResolvedValue(mockCart);
        create as jest.Mock;
        update as jest.Mock;

        const result = await createOrUpdateCart(mockUserId, mockPayload);
        expect(result).toEqual(mockData);
    });

    it("remove cart", async () => {
        const mockId = "1";
        const mockUserId = "1";
        const mockData = `product successfully removed from cart`;

        (findByIdAndUserId as jest.Mock).mockResolvedValue(
            {} as unknown as Cart
        );
        remove as jest.Mock;

        const result = await removeCart(mockId, mockUserId);
        expect(result).toEqual(mockData);
    });
});
