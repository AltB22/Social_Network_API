const { Schema, model } = require('mongoose');
// const thoughtSchema = require('./thought');
const friendSchema = require('./friend');
const reactionSchema = require('./reaction');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      reqired: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // validate: [validateEmail, 'Please fill a valid email address'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    // thoughts: [thoughtSchema],
    friends: [friendSchema],
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true,
    },
  }
)
const User = model('user', userSchema);
module.exports =  User;
