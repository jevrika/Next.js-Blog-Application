import mongoose, { Schema } from 'mongoose';

const commnetSchema = new Schema(
  {
    blogId: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
      min: 3,
      max: 50,
    },
    comment: {
      type: String,
      required: true,
      min: 3,
      max: 200,
    },
  },
  {
    timestamps: true,
  }
);

export interface IComment extends Document {
  _id?: string;
  blogId: string;
  author: string;
  comment: string;
  createdAt?: string ;
}


const Comment = mongoose.models.Comment<IComment> || mongoose.model('Comment', commnetSchema);
export default Comment;
