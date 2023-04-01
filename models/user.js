const { Schema, model } = require('mongoose');
const thoughtSchema = require('./thought');
// const friendSchema = require('./friend');
// const reactionSchema = require('./reaction');

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
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Friend'
      }
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
)
const User = model('User', userSchema);

module.exports =  User;
