// export functions for handling thought requests
const { Thought, User } = require('../models');
// Add any aggregate functions

module.exports = {
    // All route functions
    // GET all thoughts
    getAllThoughts(req, res) {
        Thought.Find()
            .select("-__v")
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    // GET single thought by _id
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thought) => {
                User.findOneAndUpdate(
                    { username: req.body.username },
                    { $addToSet: { thoughts: thought._id } },
                    { new: true }
                )
                .then((newThought) => {
                    !newThought
                            ? res.status(404).json({ message: "No thoughts with that id" })
                            : res.json(thought)
                })
            })
            .catch((err) => res.status(500).json(err));
    },
    // POST new thought and push to user's thought array
    createNewThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                User.findOneAndUpdate(
                    { username: req.body.username },
                    { $addToSet: { thoughts: thought._id } },
                    { new: true }
                ).then((newThought) => {
                    console.log(newThought);
                });
                res.json(thought);
            })
            .catch((err) => res.status(500).json(err));
    },
    // PUT update thought by _id
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "No thought with that Id" })
                    : res.json(thought)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // DELETE remove thought by _id
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "No thought with that Id" })
                    : Thought.deleteMany({ _id: { $in: thought.reactions } })
            )
            .then(() =>
                res.json({ message: "Thought was deleted" })
            )
            .catch((err) => res.status(500).json(err));
    },
    // DELETE reaction by id
    deleteReaction(req, res) {
        Reaction.findOneAndUpdate(
            { _id: req.body._id }, 
            { $pull: { friends: req.params.friendId} },
            { new: true} 
        )
        .then((reaction) =>
            !reaction
                ? res.status(404).json({ message: "No reaction with that ID" })
                : res.json({ message: 'Your reaction has been removed.'})
        )
        .catch((err) => res.status(500).json(err));
    },
    // POST new reaction
    createNewReaction(req, res) {
        Reaction.create(req.body)
        .then((reaction) => {
            Thought.findOneAndUpdate(
                { username: req.body.username },
                { $addToSet: { reactions: reaction } },
                { new: true }
            ).then((Newreaction) => {
                console.log(Newreaction);
            });
            res.json(reaction);
        })
        .catch((err) => res.status(500).json(err));
    },
}