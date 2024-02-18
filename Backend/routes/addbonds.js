// addstocks.js

const express = require('express');
const router = express.Router();
const UserBonds = require('../models/user_bonds_db');

router.post('/addBond', async (req, res) => {
    try {
        const { username, assetname, value } = req.body;

        // Create a new stock entry
        const newBond = new UserBonds({
            username,
            assetname,
            value
        });

        // Save the new stock entry to the database
        await newBond.save();

        // Respond with success message
        res.status(200).json({ message: 'Bond added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
