import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.URL, {
            dbName : "college"
        });

        console.log(`Database Connected Successfully : ${connect.connection.host}`)
    } catch (e) {
        console.log("Error While Connecting to Database : ", e);
        process.exit(1);
    }
}