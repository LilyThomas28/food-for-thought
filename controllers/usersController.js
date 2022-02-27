// export functions for handling user requests
const { User, Thought } = require('../models');

module.exports = {
    // All route functions
    // GET all users
    getAllUsers(req, res) {
        User.find()
            .select('-__v')
            .populate('thoughts')
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    // GET a single user by _id
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .populate('thoughts')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: "No user with that id" })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // POST new user
    createNewUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    // PUT update user by _id
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((user) =>
            !user
                ? res.status(404).json({ message: 'No user with this id!' })
                : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    // DELETE user by _id
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: "No user with that Id" })
                    : Thought.deleteMany({ _id: { $in: user.thoughts } })
            )
            .then(() =>
                res.json({ message: "User was deleted" })
            )
            .catch((err) => res.status(500).json(err)); 
    },
    // POST to add new friend to user's friend list
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.body } },
            { new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user found with that Id' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // DELETE remove friend from user's friend list
    deleteFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friend: { friendId: req.params.friendId } } },
            { new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user found with that Id' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
}