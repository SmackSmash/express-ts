const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
    console.log('DB Connected');
  } catch (error: any) {
    console.error(error.message || 'Error');
    process.exit(1);
  }
};

module.exports = connectDB;
