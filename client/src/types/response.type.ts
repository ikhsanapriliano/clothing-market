export interface ResponseType {
    status: number;
    message: string;
    data: unknown;
}

export interface ErrorType {
    error: string;
    message: string;
}
