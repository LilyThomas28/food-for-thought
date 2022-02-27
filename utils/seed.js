const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUser, getRandomThoughts, getRandomEmail } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

    // Drop existing thoughts
    await Thought.deleteMany({});
    // Drop existing users
    await User.deleteMany({});

    const users = [];
    const thoughts = getRandomThoughts(10);

    for (let i = 0; i < 10; i++) {
        const username = getRandomUser();
        const email = getRandomEmail();
        users.push({
            username,
            email,
        });
    }

    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    // loops through the saved thoughts and connect to reactions and users
    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});