const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,

} = require('../../controllers/thoughtController.js');

//get all thoughts and create new thought
router.route('/').get(getThoughts).post(createThought);//.get = no body, .post = JSON username & email

//get one thought by ID, update a thought by ID, and delete a thought by ID
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);//Attach user id to URL except for .put need both URL id extension AND JSON body

//Add or delete a reaction
router.route('/:thoughtId/reactions/').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;