import express, { type Request, type Response } from 'express';
import Comment from '../models/comment';
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const comments = await Comment.find();
  console.log(comments);
  res.send(comments);
});

export default router;
