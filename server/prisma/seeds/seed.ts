import prisma from "../../src/utils/prisma";
import categorySeeder from "./category.seed";
import shipperSeeder from "./shipper.seed";
import userSeeder from "./user.seed";

const seed = async (): Promise<void> => {
    try {
        await userSeeder(prisma);
        await categorySeeder(prisma);
        await shipperSeeder(prisma);

        console.log("prisma seeding complete");
    } catch (error: Error | unknown) {
        console.log(`seed error: ${(error as Error).message}`);
    }
};

seed();
