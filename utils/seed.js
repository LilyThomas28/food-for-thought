const connection = require('../config/connection');
const { User, Thought } = require('../models');
// const {  } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

    // Drop existing thoughts
    await Thought.deleteMany({});
    // Drop existing users
    await User.deleteMany({});

    // user: username, email, thoughts?, friends?
    const usernames = ["John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul"];
    module.exports = usernames.map(user => ({
        username: user,
        email: "example@example.com"
    }))

    // thoughts: thoughtText, username?, reactions?
    const thoughts = [""]
    module.exports = thoughts.map(thought => ({
        thoughtText: thought,
        email: "example@example.com"
    }))
    // reactions: reactionBody, username?
  
});