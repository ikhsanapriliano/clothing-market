import bcrypt from "bcrypt";

const saltRounds = 10;

export const encrypt = (password: string): string => {
    return bcrypt.hashSync(password, saltRounds);
};
