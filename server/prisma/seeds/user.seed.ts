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

    await prisma.user.createMany({
        data: [
            {
                username: "Lunar",
                email: "lunar@gmail.com",
                password: encrypt("123456"),
                role: "USER",
                verified: true,
            },
            {
                username: "Sarah",
                email: "sarah@gmail.com",
                password: encrypt("123456"),
                role: "USER",
                verified: true,
            },
            {
                username: "David",
                email: "david@gmail.com",
                password: encrypt("123456"),
                role: "USER",
                verified: true,
            },
            {
                username: "Johnson",
                email: "johnson@gmail.com",
                password: encrypt("123456"),
                role: "USER",
                verified: true,
            },
            {
                username: "Martinez",
                email: "martinez@gmail.com",
                password: encrypt("123456"),
                role: "USER",
                verified: true,
            },
        ],
    });
};

export default userSeeder;
