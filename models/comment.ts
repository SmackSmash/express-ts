import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const CommentSchema = new Schema({
  name: String,
  email: String,
  text: String
});

export default mongoose.model('comments', CommentSchema);
