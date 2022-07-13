const { Schema, model } = require("mongoose")
const commentSchema = require('./Comment')
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
        },
        comments:[commentSchema]
    }

)

const Post = model('post', postSchema);

module.exports = Post;