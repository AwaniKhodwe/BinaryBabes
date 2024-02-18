const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userFundsSchema = new Schema({
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

const UserFunds =  mongoose.model('UserFunds', userFundsSchema);

module.exports = UserFunds;