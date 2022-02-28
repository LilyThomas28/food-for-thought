const router = require('express').Router();
// add routes for thoughts
const {
    getAllThoughts,
    getSingleThought,
    createNewThought,
    updateThought,
    deleteThought,
    createNewReaction,
    deleteReaction,
} = require('../../controllers/thoughtsController');

// /api/thoughts  :
router.route('/')
    // GET to get all thoughts
    .get(getAllThoughts)
    // POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
    .post(createNewThought);

// /api/thoughts/:thoughtId
router.route('/:id')
    // GET to get a single thought by its _id
    .get(getSingleThought)
    // PUT to update a thought by its _id
    .put(updateThought)
    // DELETE to remove a thought by its _id
    .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions  :
router.route('/:id/reactions/').post(createNewReaction);
router.route('/:id/reactions/:reactionId').delete(deleteReaction);
// POST to create a reaction stored in a single thought's reactions array field
// DELETE to pull and remove a reaction by the reaction's reactionId value

module.exports = router;