const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userBondsSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    assetname: {
        type: String,
        required: true,
        unique: true,
        minlength:5
    },
    amtInvested: {
        type: Number,
        required: true,
        unique: true,
        minlength:5
    },
    

},
{
    timestamps: true,
});

const UserBonds =  mongoose.model('UserBonds', userBondsSchema);

module.exports = UserBonds;