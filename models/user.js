const { truncate } = require('fs');
const { Schema, model } = require('mongoose');

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
      match: [],//Must match a valid email address (look into Mongoose's matching validation),
    },
    thoughts: [
     { type: Schema.Types.ObjectId,//Array of _id values referencing the Thought model
       ref: 'thought',
    },
    ],
    friends: [
      { type: Schema.Types.UserId,//Array of _id values referencing the User model - self ref.
      ref: 'thought',
   },
    ]
  }
)

module.exports =  userSchema;
