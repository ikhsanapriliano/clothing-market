export const getApiUrl = (): string => {
    const host: string = import.meta.env.VITE_APP_API_URL;

    return host;
};
