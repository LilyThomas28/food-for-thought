const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
            trim: true
        },
        email:{
            type: String,
            require: true,
            unique: true,
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    // {
    //     toJSON: {
    //         virtuals: true;
    //     },
    //     id: false,
    // }
);


// Schema Settings:
// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.