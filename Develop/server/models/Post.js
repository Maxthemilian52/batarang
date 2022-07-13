const { Schema, model } = require("mongoose")

const postSchema = new Schema(
    {
        postBody: {
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
        }
    }
)

const Post = model('post', postSchema);

module.exports = Post;