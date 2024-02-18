const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userStocksSchema = new Schema({
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
    value: {
        type: Number,
        required: true,
        unique: true,
        minlength:5
    },


},
{
    timestamps: true,
});

const UserStocks =  mongoose.model('UserStocks', userStocksSchema);

module.exports = UserStocks;