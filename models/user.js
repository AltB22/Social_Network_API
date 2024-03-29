const { Schema, model } = require('mongoose');
// const Thought = require('./thought');


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
        ref: 'User'
      }
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// virtual to get the length of the user's friend array field
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});
const User = model('User', userSchema);

module.exports =  User;
