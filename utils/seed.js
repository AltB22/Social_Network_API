// Experimental Seed Data - not required but just a good exercise.

// const mongoose = require('mongoose');
// const User = require("../models/user");
// const handleError = (err) => console.error(err);

// //creating an instance of the user model
// User.create(
//     {
//       username: 'Billy',
//       email: 'billy@gmail.com',
//       thoughts: [
//         {thoughtText: "Hello"}
//       ],
//       friends: [
//         {friend: "friend"}
//       ]
      
//     },
//     (err) => (err ? handleError(err) : console.log('Created new document'))
//   );
  
//   module.exports = User;

//Tried a different approact to seed data below:
// const mongoose = require('mongoose');

// const userId = new mongoose.Types.ObjectId();
// const thoughtId = new mongoose.Types.ObjectId();
// const friendId = new mongoose.Types.ObjectId();

// const userData = {
//   _id: userId,
//   username: 'testUser',
//   email: 'test@example.com',
//   thoughts: [
//     {
//       _id: thoughtId,
//       thoughtText: 'Hello, world!',
//       createdAt: new Date(),
//     },
//   ],
//   friends: [friendId],
// };

// module.exports = userData;
