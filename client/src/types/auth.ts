export interface RegisterPayload {
    email: string;
    password: string;
    confirmPassword: string;
}

export interface TokenResponse {
    token: string;
}

export interface TokenPayload {
    id: string;
    role: string;
}
