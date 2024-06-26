import express, { type Express } from 'express';
import connectDB from './config/db';
import dotenv from 'dotenv';

import commentRouter from './routes/comments';

dotenv.config();

const app: Express = express();

app.use(express.json());

connectDB();

app.use('/comments', commentRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
