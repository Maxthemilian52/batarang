const { Schema, model } = require("mongoose")
const dateFormat = require("../utils/dateFormat")
const postSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
    },
        postContent: {
            type: String,
            required: true,
        },
        postAuthor: {
          type: String,
          required: true,

        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: (timestamp) => dateFormat(timestamp),
        },
        comments:[{
            commentBody: {
                type: String,
                required: true,
                minlength: 1,
                maxlength: 280,
              },
              commentAuthor: {
                type: String,
                required: true,
              },
              createdAt: {
                type: Date,
                default: Date.now(),
                get: (timestamp) => dateFormat(timestamp),
              },
        }]
    }

)

const Post = model('post', postSchema);

module.exports = Post;