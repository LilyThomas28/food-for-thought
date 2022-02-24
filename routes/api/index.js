const router = require('express').Router();
const thoughtsRouter = require('./thoughtsRouter');
const usersRouter = require('./usersRouter');

router.use('/thoughts', thoughtsRouter);
router.use('/users', usersRouter);

module.exports = router;
