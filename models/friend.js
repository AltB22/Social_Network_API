const { Schema, model } = require('mongoose');
// const thoughtSchema = require('./thought');
const userSchema = require('./user');

const friendSchema = new Schema(
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
      match: [],//Must match a valid email address (look into Mongoose's matching validation),
    },
    // thoughts: [thoughtSchema],
    users: [userSchema],
  }
)
const Friend = model('friend', friendSchema);
module.exports =  Friend;