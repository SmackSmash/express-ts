import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CommentSchema = new Schema({
  name: String,
  email: String,
  movie_id: ObjectId,
  text: String,
  date: Date
});

export default mongoose.model('comments', CommentSchema);
