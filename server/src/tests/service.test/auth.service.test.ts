import { User } from "@prisma/client";
import { login, register, verify } from "../../repositories/auth.repository";
import {
    loginUser,
    registerUser,
    verifyUser,
} from "../../services/auth.service";
import {
    LoginPayload,
    RegisterInput,
    TokenPayload,
} from "../../types/auth.type";
import { encrypt } from "../../utils/bcrypt";
import { generateAccessToken } from "../../utils/jwt";
import { sendVerificationMail } from "../../utils/mailer";
import { findByIdUser } from "../../services/user.service";

jest.mock("../../repositories/auth.repository");
jest.mock("../../services/user.service");
jest.mock("../../utils/mailer");
jest.mock("../../utils/jwt");

describe("auth service test", () => {
    it("register user", async () => {
        const mockPayload: RegisterInput = {
            email: "abc@gmail.com",
            password: "123456",
            confirmPassword: "123456",
        };

        const mockId = "1";
        const mockData =
            "register success, please check your email for verification";

        (register as jest.Mock).mockResolvedValue(mockId);

        const result = await registerUser(mockPayload);

        expect(result).toEqual(mockData);
    });

    it("verify user", async () => {
        const mockId = "1";

        const mockUser: User = {
            id: mockId,
            username: "1",
            email: "1",
            password: "1",
            role: "USER",
            verified: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        const mockToken = "1";

        (findByIdUser as jest.Mock).mockResolvedValue(mockUser);
        (verify as jest.Mock).mockResolvedValue(undefined);
        (sendVerificationMail as jest.Mock).mockResolvedValue(undefined);
        (generateAccessToken as jest.Mock).mockResolvedValue(mockToken);

        const result = await verifyUser(mockId);

        expect(result).toEqual(mockToken);
    });

    it("login user", async () => {
        const mockPayload: LoginPayload = {
            email: "abc@gmail.com",
            password: "123456",
        };
        const mockData: User = {
            id: "1",
            username: "1",
            email: mockPayload.email,
            password: encrypt(mockPayload.password),
            role: "USER",
            verified: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        const mockToken = "1";

        (login as jest.Mock).mockResolvedValue(mockData);
        (generateAccessToken as jest.Mock).mockResolvedValue(mockToken);

        const result = await loginUser(mockPayload);
        expect(result).toEqual(mockToken);
    });
});
