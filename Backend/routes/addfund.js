// Import necessary packages
const express = require('express');
const router = express.Router();
const UserFunds = require('../models/user_funds_db'); // Correct import

// Define route to handle adding fund data
router.post('/addFund', async (req, res) => {
  try {
    // Extract username, assetname, and value from request body
    const { username, assetname, value } = req.body;

    // Check if the fund already exists for the user
    const existingFund = await UserFunds.findOne({ username, assetname });

    if (existingFund) {
      return res.status(400).json({ error: 'Fund already exists for this user' });
    }

    // Create a new fund entry
    const newFund = new UserFunds({
      username,
      assetname,
      value
    });

    // Save the new fund entry to the database
    await newFund.save();

    res.status(200).json({ message: 'Fund added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
