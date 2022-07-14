const { Schema, model } = require("mongoose")

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
     
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+\@.+\..+/, "Must be a valid email address!"]
        },
        phone: {
            type: String,
            required: true,
            match: [/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/, "Must be a valid phone number!"]
        },
        address: {
            type: String,
            required: true
        },
        team: {
            type: String,
            required: true   
        },
        position: {
            type: String,
            required: true   
        },
        gradYear: {
            type: Number,
            required: true,
        },
        posts: [
            {
              type: Schema.Types.ObjectId,
              ref: 'Post',
            },
          ],
    },

);

    const User = model('user', userSchema);

module.exports = User;