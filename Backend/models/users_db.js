const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true, // Password should be required but not unique
        minlength: 5 // Adjust minlength as needed
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5 // Adjust minlength as needed
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        minlength: 5 // Adjust minlength as needed
    }
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;