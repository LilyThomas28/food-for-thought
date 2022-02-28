const { Schema, Types } = require('mongoose');
// Reaction (SCHEMA ONLY)
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            timestamp: { 
                type: Date, 
                default: Date.now
            },
        },
    },
    {
        toJSON: {
            getters: true
        },
    },
);

module.exports =  reactionSchema;
// Use a getter method to format the timestamp on query