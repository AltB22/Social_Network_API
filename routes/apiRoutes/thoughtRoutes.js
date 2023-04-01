const router = require('express').Router();
// const ObjectId = require('mongodb'.ObjectId);

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,

} = require('../../controllers/thoughtController.js');

router.route('/').get(getThoughts).post(createThought);//.get = no body, .post = JSON username & email
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);//Attach user id to URL.  No body JSON


module.exports = router;