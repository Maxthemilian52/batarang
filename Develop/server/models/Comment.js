const { Schema, Types } = require("mongoose") 
const postSchema = require('./Post')

const commentSchema = new Schema(
    {
      postId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      reactionBody: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now()
      },
      post: [postSchema]
    },
    {
      toJSON: {
        getters: true,
      },
    }
  );

//   commentSchema.virtual("commentCount").get(function(){
//     return this.comment.length
//   });

    const Comment = model('comment', commentSchema)

module.exports = Comment;