// addstocks.js

const express = require('express');
const router = express.Router();
const UserStocks = require('../models/user_stocks_db');

router.post('/addStock', async (req, res) => {
    try {
        const { username, assetname, value } = req.body;

        // Create a new stock entry
        const newStock = new UserStocks({
            username,
            assetname,
            value
        });

        // Save the new stock entry to the database
        await newStock.save();

        // Respond with success message
        res.status(200).json({ message: 'Stock added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
