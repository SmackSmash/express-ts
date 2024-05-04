const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

connectDB();

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

export {};
