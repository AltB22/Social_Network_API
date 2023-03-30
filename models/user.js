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
      // match: [],//Must match a valid email address (look into Mongoose's matching validation),
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
