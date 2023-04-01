const { Schema, model } = require('mongoose');
const moment = require('moment');
// const userSchema = require('../models');
// const reactionSchema = require('./reaction');

// Schema to create Thought model
//need to add reaction field subdoc in this model
const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // getter method to format timestamp
    get: (timestamp) => moment(timestamp).format('MMM DD, YYYY [at] hh:mm a')
  }
});


const ThoughtSchema = new Schema(
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
    reactions: [ReactionSchema],//array of nested docs created by reactionSchema
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false
  }
);
//need to add virtual called reactionCount getting the reactions.length
ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('thought', ThoughtSchema);

module.exports = Thought;


