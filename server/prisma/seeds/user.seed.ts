import { PrismaClient } from "@prisma/client";
import { encrypt } from "../../src/utils/bcrypt";

const userSeeder = async (prisma: PrismaClient): Promise<void> => {
    await prisma.user.deleteMany();

    await prisma.user.create({
        data: {
            username: "admin",
            email: "admin@gmail.com",
            password: encrypt("123456"),
            role: "ADMIN",
            verified: true,
        },
    });
};

export default userSeeder;
