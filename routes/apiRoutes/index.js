const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');
// const friendRoutes = require('./friendRoutes');

router.use('/user', userRoutes);
router.use('/thought', thoughtRoutes);
// router.use('/friends', friendRoutes);

module.exports = router;
