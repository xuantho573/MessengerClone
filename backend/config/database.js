import mongoose from "mongoose";

const configDatabase = async (databaseEntry) => {
    try {
        await mongoose.connect(databaseEntry);
        console.log(`Database connected successfully!`);
    } catch (err) {
        console.log(`Errors detected while connecting to Mongoose`);
    }
};

export default configDatabase;
