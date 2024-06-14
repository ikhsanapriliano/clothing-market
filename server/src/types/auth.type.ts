export interface RegisterInput {
    email: string;
    password: string;
    confirmPassword: string;
}

export interface RegisterPayload {
    username: string;
    email: string;
    password: string;
}

export interface LoginPayload {
    email: string;
    password: string;
}

export interface TokenPayload {
    id: string;
    role: string;
}
