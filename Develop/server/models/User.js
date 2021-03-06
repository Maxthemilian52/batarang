const { Schema, model } = require("mongoose")
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
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
            // match: [/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/, "Must be a valid phone number!"]
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

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // compare the incoming password with the hashed password
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

    const User = model('user', userSchema);

module.exports = User;