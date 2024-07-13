import { PrismaClient } from "@prisma/client";

const categorySeeder = async (prisma: PrismaClient): Promise<void> => {
    await prisma.category.deleteMany();

    await prisma.category.createMany({
        data: [
            {
                name: "t-shirt",
            },
            {
                name: "shirt",
            },
            {
                name: "pants",
            },
            {
                name: "jacket",
            },
            {
                name: "sweather",
            },
            {
                name: "shoes",
            },
            {
                name: "sandals",
            },
            {
                name: "socks",
            },
            {
                name: "hat",
            },
            {
                name: "eyeglasses",
            },
            {
                name: "watch",
            },
            {
                name: "skirt",
            },
        ],
    });
};

export default categorySeeder;
