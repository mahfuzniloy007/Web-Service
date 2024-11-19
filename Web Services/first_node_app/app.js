// Importing the Express module
const express = require('express');
// Importing the router
const router = require('./routes/pages');

// Creating an instance of an Express App
const app = express();
// Define the port number
const port = 4000;


// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
