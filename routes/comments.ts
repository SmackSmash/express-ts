import express, { type Request, type Response } from 'express';
import Joi from 'joi';
import Comment from '../models/comment';

const router = express.Router();

const schema = Joi.object().keys({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  text: Joi.string().required()
});

router.get('/', async (req: Request, res: Response) => {
  const comments = await Comment.find();
  res.send(comments);
});

router.post('/add', async (req: Request, res: Response) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(422).send({ error: error.details });
  }

  const { name, email, text } = req.body;
  const comment = await Comment.create({ name, email, text });
  res.send(comment);
});

export default router;
