import { login, register, verify } from "../repositories/auth.repository";
import {
    LoginPayload,
    RegisterInput,
    RegisterPayload,
    TokenPayload,
} from "../types/auth.type";
import {
    loginPayloadValidation,
    registerPayloadValidation,
} from "../validations/auth.validation";
import { compare, encrypt } from "../utils/bcrypt";
import { sendVerificationMail } from "../utils/mailer";
import { generateAccessToken } from "../utils/jwt";
import { findByIdUser } from "./user.service";

export const registerUser = async (payload: RegisterInput): Promise<string> => {
    const { value, error } = registerPayloadValidation(payload);
    if (error != undefined) throw new Error(`400:${error.message}`);

    const user: RegisterPayload = {
        username: value.email.split("@")[0],
        email: value.email,
        password: encrypt(value.password),
    };

    const id = await register(user);

    await sendVerificationMail(user.email, id);

    const data = `register success, please check your email for verification`;

    return data;
};

export const verifyUser = async (id: string): Promise<string> => {
    await findByIdUser(id);

    await verify(id);
    const data = `verification success`;

    return data;
};

export const loginUser = async (payload: LoginPayload): Promise<string> => {
    const { value, error } = loginPayloadValidation(payload);
    if (error != undefined) throw new Error(`400:${error.message}`);

    const user = await login(value.email);
    if (user == null) throw new Error(`400:wrong email`);
    if (!user.verified)
        throw new Error(
            `400:you are not verified, please veirfy your account first`
        );

    const passwordCheck = compare(value.password, user.password);
    if (!passwordCheck) throw new Error(`400:wrong password`);

    const tokenPayload: TokenPayload = {
        id: user.id,
        role: user.role,
    };
    const token = generateAccessToken(tokenPayload);

    return token;
};
