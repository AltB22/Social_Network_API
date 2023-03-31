const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const friendRoutes = require('./friendRoutes');

router.use('/user', userRoutes);
router.use('/thought', userRoutes);
// router.use('/friends', friendRoutes);

module.exports = router;
