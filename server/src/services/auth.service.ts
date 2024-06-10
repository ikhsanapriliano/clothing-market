import { register } from "../repositories/auth.repository";
import { registerInput, registerPayload } from "../types/auth.type";
import { registerPayloadValidation } from "../validations/auth.validation";
import { encrypt } from "../utils/bcrypt";

export const registerUser = async (payload: registerInput): Promise<string> => {
    const { value, error } = registerPayloadValidation(payload);
    if (error != undefined) throw new Error(`400:${error.message}`);

    const user: registerPayload = {
        username: value.email.split("@")[0],
        email: value.email,
        password: encrypt(value.password),
    };

    await register(user);
    const data = `register success, please check your email for verification`;

    return data;
};
