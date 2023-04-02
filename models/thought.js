const { Schema, model } = require('mongoose');
const moment = require('moment');




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
},
{
  toJSON: {
    virtuals: true,
    getters: true,
  },
  id: false
}
);

// Schema to create Thought model with embedded reaction array
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
      get: (timestamp) => moment(timestamp).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [ReactionSchema], 
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


