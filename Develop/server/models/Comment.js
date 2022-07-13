const { Schema, Types, model } = require("mongoose") 


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


module.exports = commentSchema;