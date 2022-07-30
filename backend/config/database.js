const connectDatabase = async (mongoose, databaseEntry) => {
    try {
        await mongoose.connect(databaseEntry);
        console.log(`Database connected successfully!\n`);
    } catch (err) {
        console.log(`Errors detected while connecting to Mongoose!\n`);
    }
};

export { connectDatabase };
