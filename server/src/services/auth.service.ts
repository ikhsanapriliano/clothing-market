import { login, register, verify } from "../repositories/auth.repository";
import {
    loginPayload,
    registerInput,
    registerPayload,
    tokenPayload,
} from "../types/auth.type";
import {
    loginPayloadValidation,
    registerPayloadValidation,
} from "../validations/auth.validation";
import { compare, encrypt } from "../utils/bcrypt";
import { sendVerificationMail } from "../utils/mailer";
import { findById } from "../repositories/user.repository";
import { generateAccessToken } from "../utils/jwt";

export const registerUser = async (payload: registerInput): Promise<string> => {
    const { value, error } = registerPayloadValidation(payload);
    if (error != undefined) throw new Error(`400:${error.message}`);

    const user: registerPayload = {
        username: value.email.split("@")[0],
        email: value.email,
        password: encrypt(value.password),
    };

    const id = await register(user);

    const info = await sendVerificationMail(user.email, id);

    const data = `register success, please check your email for verification`;

    return data;
};

export const verifyUser = async (id: string): Promise<string> => {
    const user = await findById(id);
    if (user == null) throw new Error(`user with id ${id} not found`);

    await verify(id);
    const data = `verification success`;

    return data;
};

export const loginUser = async (payload: loginPayload): Promise<string> => {
    const { value, error } = loginPayloadValidation(payload);
    if (error != undefined) throw new Error(`400:${error.message}`);

    const user = await login(value.email);
    if (user == null) throw new Error(`400:wrong email`);

    const passwordCheck = compare(value.password, user.password);
    if (!passwordCheck) throw new Error(`400:wrong password`);

    const tokenPayload: tokenPayload = {
        id: user.id,
        role: user.role,
    };
    const token = generateAccessToken(tokenPayload);

    return token;
};
