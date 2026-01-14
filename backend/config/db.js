import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('mongoDb connected')
    } catch (error) {
        console.log('Failed to connect MongoDB', error.message);
        process.exit(1);
    }
}

export default connectDB;