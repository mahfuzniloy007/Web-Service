// Importing the Express module
const express = require('express');
// Creating a new router
const router = express.Router();

// Define a route for the home page
router.get('/', (req, res) => {
    res.send('This is the home page!');
});

// Define a route for the about page
router.get('/about', (req, res) => {
    res.send('This is the about page!');
});


// Exporting the router
module.exports = router;
