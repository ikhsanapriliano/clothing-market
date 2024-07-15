import { ErrorType, ResponseType } from "../types/response";
import { Store } from "../types/store";
import { getApiUrl } from "../utils/api";

const apiUrl = getApiUrl();

export const fetchStores = async (
    limit?: number
): Promise<Store[] | ErrorType> => {
    const response = await fetch(
        `${apiUrl}/api/stores${limit && `?limit=${limit}`}`,
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

    const data: Store[] = (result as ResponseType).data as Store[];

    return data;
};
