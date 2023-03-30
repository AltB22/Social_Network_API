const User = require('./user');
const Thought = require('./thought');
const Reaction = require('./reaction');
const Friend = require('./friend');

module.exports = { User, Friend, Thought, Reaction };

//some notes on mongodb / non - relational databases in general:

//Database
    //Collection (with no schema enforced)
        //Document (BSON object - look like typ. JS objects)
            //Fields as key : value pairs
            //Related data nested in embedded document
