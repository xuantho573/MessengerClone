import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

try {
    mongoose.connect(process.env.DATABASE_ENTRY);
}
catch (err) {
    console.log(`Errors detected while connecting to Mongoose`);
}

const connection =  mongoose.connection

export default connection