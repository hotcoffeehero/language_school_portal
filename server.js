const express = require('express');
const app = express();
const port = 3000;

// Middleware to serve static files (styles, etc.)
app.use(express.static('public'));

// Route for Home Page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Route for Students Page
app.get('/students', (req, res) => {
    res.sendFile(__dirname + '/public/students.html');
});

// Route for Instructors Page
app.get('/instructors', (req, res) => {
    res.sendFile(__dirname + '/public/instructors.html');
});

// Route for Schedule Page
app.get('/schedule', (req, res) => {
    res.sendFile(__dirname + '/public/schedule.html');
});

// Route for Payments Page
app.get('/payments', (req, res) => {
    res.sendFile(__dirname + '/public/payments.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});