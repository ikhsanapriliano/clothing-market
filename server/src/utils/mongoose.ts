import db from "mongoose";
import reviewSchema from "../../mongoose/schemas/review.schema";

const mongoose = {
    connect: async () =>
        await db.connect(process.env.MONGODB_URL as string, {
            autoCreate: true,
            autoIndex: true,
        }),
    disconnect: async () => await db.disconnect(),
    review: db.model("Review", reviewSchema),
};

export default mongoose;
