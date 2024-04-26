const express = require('express');
const path = require('path');


const app = express();


// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));


// Route for accessing /public/index.html when going to localhost:3000/
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Start the server on port 3000
app.listen(3000, () => {
   console.log('Server is running on http://localhost:3000/');
});


// Include your scraping code here
const satellite = require("./src/satellite");
const iridium = require("./src/iridium");


var location = [39.9042, 116.4074, "%E5%8C%97%E4%BA%AC%E5%B8%82", 52, "ChST"];


satellite.getTable({
   target: 25544,
   pages: 4,
   root: "./public/data/"
});
