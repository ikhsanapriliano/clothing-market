export interface registerInput {
    email: string;
    password: string;
    confirmPassword: string;
}

export interface registerPayload {
    username: string;
    email: string;
    password: string;
}

export interface loginPayload {
    email: string;
    password: string;
}

export interface tokenPayload {
    id: string;
    role: string;
}
