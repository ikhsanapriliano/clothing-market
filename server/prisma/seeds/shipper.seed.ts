import { PrismaClient } from "@prisma/client";

const shipperSeeder = async (prisma: PrismaClient): Promise<void> => {
    await prisma.shipper.deleteMany();

    await prisma.shipper.createMany({
        data: [
            {
                service: "reguler",
                fee: 10000,
            },
            {
                service: "express",
                fee: 20000,
            },
        ],
    });
};

export default shipperSeeder;
