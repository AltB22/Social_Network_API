const router = require('express').Router();
// const ObjectId = require('mongodb'.ObjectId);

const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,

} = require('../../controllers/thoughtController.js');

router.route('/').get(getThoughts).post(createThought);//.get = no body, .post = JSON username & email
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);//Attach user id to URL


module.exports = router;