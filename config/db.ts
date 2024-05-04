import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log('DB Connected');
  } catch (error: any) {
    console.error(error.message || 'Error');
    process.exit(1);
  }
};

export default connectDB;
