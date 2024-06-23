import app from "./middlewares";
import mongoose from "./utils/mongoose";

const main = async (): Promise<void> => {
    await mongoose
        .connect()
        .then(() => {
            console.log("mongoose successfully connected");
        })
        .catch((error: Error | unknown) => {
            console.log((error as Error).message);
        });

    const port = process.env.PORT !== undefined ? process.env.PORT : "3000";

    app.listen(port, () => {
        console.log(`Your app is running on http://localhost:${port}`);
    });
};

main();
