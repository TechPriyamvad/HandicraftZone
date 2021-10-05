import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL, {});
    console.log(`MongoDB connected:${connect.connection.host}`.cyan.underline.bold);
  } catch (error) {
    console.error(`Error:${error.message}`.red.underline.bold);
    process.exit(1);
  }
};
export default connectDB;
