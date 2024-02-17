const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userBondsSchema = new Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    bondName: {
        type: String,
        required: true,
        unique: true,
        minlength:5
    },
    amtInvested: {
        type: Float32Array,
        required: true,
        unique: true,
        minlength:5
    },
    

},
{
    timestamps: true,
});

const UserBonds =  mongoose.model('UserFunds', userBondsSchema);

module.exports = UserBonds;