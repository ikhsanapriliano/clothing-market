import { Product } from "../types/product";
import { ErrorType, ResponseType } from "../types/response";
import { getApiUrl } from "../utils/api";

const apiUrl = getApiUrl();

export const fetchProducts = async (
    limit?: number
): Promise<Product[] | ErrorType> => {
    const response = await fetch(
        `${apiUrl}/api/products${limit && `?limit=${limit}`}`,
        {
            headers: {
                "content-type": "application/json",
            },
        }
    );

    const result: ResponseType | ErrorType = await response.json();
    if (response.status !== 200) {
        return result as ErrorType;
    }

    const data: Product[] = (result as ResponseType).data as Product[];

    return data;
};
