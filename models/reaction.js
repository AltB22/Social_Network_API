const { Schema, model } = require('mongoose');
const userSchema = require('./user')

const reactionSchema = new Schema(
  {
    courseName: {
      type: String,
      required: true,
    },
    inPerson: {
      type: Boolean,
      default: true,
    },
    startDate: {
      type: Date,
      default: Date.now(),
    },
    endDate: {
      type: Date,
      default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
    },
    users: [userSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: true,
  }
);

const Reacton = model('reaction', reactionSchema);

module.exports = Reacton;
