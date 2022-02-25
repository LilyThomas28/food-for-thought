const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String, 
            required: true,
            min_length: 1,
            max_length: 280,
        },
        createdAt: {
            timestamp: { 
                type: Date, 
                default: Date.now
            },
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
        return reactions.length;
    });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;

// createdAt:
// Use a getter method to format the timestamp on query