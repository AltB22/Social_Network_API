const Student = require('./Student');
const Course = require('./Course');

module.exports = { Student, Course };

//some notes on mongodb / non - relational databases in general:

//Database
    //Collection (with no schema enforced)
        //Document (BSON object - look like typ. JS objects)
            //Fields as key : value pairs
            //Related data nested in embedded document
