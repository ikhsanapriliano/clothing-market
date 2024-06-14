import { User } from "@prisma/client";
import {
    change,
    findById,
    remove,
    update,
} from "../repositories/user.repository";
import { ChangePasswordPayload, ProfilePayload } from "../types/user.type";
import {
    changePasswordPayloadValidation,
    profilePayloadValidation,
} from "../validations/user.validation";
import { compare, encrypt } from "../utils/bcrypt";

export const findByIdUser = async (id: string): Promise<User> => {
    const data = await findById(id);
    if (data == null) throw new Error(`400:user with id ${id} not found`);
    data.password = "";

    return data;
};

export const changePassword = async (
    id: string,
    payload: ChangePasswordPayload
): Promise<string> => {
    const { value, error } = changePasswordPayloadValidation(payload);
    if (error != undefined) throw new Error(`400:${error.message}`);

    const user = await findById(id);
    if (user == null) throw new Error(`400:user with id ${id} not found`);

    if (!compare(value.currentPassword, user.password)) {
        if (user == null) throw new Error(`400:password wrong`);
    }

    await change(id, encrypt(value.newPassword));
    const data = "change password success";

    return data;
};

export const updateProfile = async (
    userId: string,
    payload: ProfilePayload
): Promise<string> => {
    const { value, error } = profilePayloadValidation(payload);
    if (error != undefined) throw new Error(`400:${error.message}`);

    const user = await findById(userId);
    if (user == null) throw new Error(`400:user with id ${userId} not found`);

    await update(userId, value);
    const data = `user with id ${userId} successfully updated`;

    return data;
};

export const removeUser = async (id: string): Promise<string> => {
    const user = await findById(id);
    if (user == null) throw new Error(`400:user with id ${id} not found`);

    await remove(id);
    const data = `user with id ${id} successfully deleted`;

    return data;
};
