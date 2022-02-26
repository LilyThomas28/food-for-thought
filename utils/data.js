// user: username, email, thoughts?, friends?
const usernames = ["John", "Joanne", "Bob", "Will", "Chris", "Mike", "Anna", "Jack", "Peter", "Paul"];

// thoughts: thoughtText, username?, reactions?
const thoughts = [
    "It’s really 2022", 
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

const reactions = [
    "wow that's crazy",
    "never thought of this before",
    "You should expand more on your thought",
    "meh this is a boring topic",
    "we should be friends now",
    "Ahhhh",
    "booooo",
    "my mind is blown",
    "I can't think of an answer",
    "i could never"
];
// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username
const getRandomUser = () =>
    `${getRandomArrItem(usernames)}`;

// Gets random email
const getRandomEmail = () =>
    `${getRandomArrItem(usernames)}@gmail.com`;

// Gets random reaction
const getRandomReaction = (arr) => {
    let results = [];
    for (let i = 0; i < arr; i++) {
        results.push({
            reactionBody: getRandomArrItem(reactions),
            username: getRandomUser(),
        });
    }
    return results;
}

// Function to generate random thoughts that we can add to the database. Includes thought reactions.
const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            thoughtText: getRandomArrItem(thoughts),
            username: getRandomUser(),
            reactions: [...getRandomReaction(3)],
        });
    }
    return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomUser, getRandomThoughts, getRandomEmail };
