const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files from the 'js-pages' directory
app.use('/', express.static(path.join(__dirname, 'js-pages/page-1')));

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, 'react-pages/build')));

// Handle client-side routing, return all requests to the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'react-pages/build', 'index.html'));
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});