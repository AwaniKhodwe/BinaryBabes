const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userStocksSchema = new Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    stockName: {
        type: String,
        required: true,
        unique: true,
        minlength:5
    },
    buyingPrice: {
        type: Float32Array,
        required: true,
        unique: true,
        minlength:5
    },
    quantity: {
        type: Float32Array,
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