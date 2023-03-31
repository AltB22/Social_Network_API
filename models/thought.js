const { Schema, model } = require('mongoose');
// const dateFormat = require('..utils/dateFormat');
// const userSchema = require('../models');
// const reactionSchema = require('./reaction');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      // get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    // users: [userSchema],
    reactions: [reactionSchema],//array of nested docs created by reactionSchema
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
//need to add virtual called reactionCount getting the reactions.length
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
