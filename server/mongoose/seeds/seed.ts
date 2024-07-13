import mongoose from "../../src/utils/mongoose";
import reviewSeeder from "./review.seed";

const seed = async () => {
    try {
        // await mongoose.connect();
        // await reviewSeeder(mongoose);

        console.log("mongoose seeding complete");
    } catch (error: Error | unknown) {
        console.log((error as Error).message);
    }
};

seed();
