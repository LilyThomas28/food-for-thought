// export functions for handling user requests
const { User, Thought } = require('../models');

module.exports = {
    // All route functions
    // GET all users
    getAllUsers(req, res) {
        User.Find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    // GET a single user by _id
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: "No user with that id" })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    }
    // POST new user

    // PUT update user by _id

    // DELETE user by _id

    // POST to add new friend to user's friend list

    // DELETE remove friend from user's friend list
}