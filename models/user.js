const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },    
    {
        timestamps: true
    }
);

//creating a new mongoose model 'User' for the schema.
const User = mongoose.model('User', userSchema);

// Exports the user model for use in others parts of your application.
module.exports = User;