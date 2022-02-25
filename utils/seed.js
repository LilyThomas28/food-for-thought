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
    module.exports = 
        usernames.map(user => ({
            username: user,
            email: "example@example.com"
        }))

    // thoughts: thoughtText, username?, reactions?
    const thoughts = ["It’s really 2022", 
        "This is really my last year in my 20’s (I turned 29 on the 20th)", 
        "I’m getting more and more comfortable with the current version of my body",
        "I deleted Facebook, Instagram and Twitter from my phone",
        "Have you ever seen or heard someone repeat one of your ideas like it was theirs?",
        "I plan to write and read wayyyy more this year",
        "Social Media is really making folks crazy…. Audacity is at an all time high",
        "The more I get into my music career, the more people fall out of my life",
        "I am feigning for community and I hope that pouring into my website and myself gets me that type of tribe I‘ve been craving forever",
        "I never feel like I lack anything until I log into social media (It’s always in comparison to others when those weird thoughts and feelings arise)"
    ];
    module.exports = 
        thoughts.map(thought => ({
            thoughtText: thought,
        }))
        usernames.map(user => ({
            username: user,
        }))
        

    // reactions: reactionBody, username?
  
});