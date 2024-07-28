const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// List of Klingon jokes
const jokes = [
    "A Klingon, a Ferengi, and a Betazoid woman were sitting around in Quark's bar...",
    "Q: How many Klingons does it take to change a light bulb? A: None. Klingons aren't afraid of the dark.",
    "Klingons do not make software bugs. Their software is perfect from the first compile.",
    "Klingon programming does not tolerate error messages."
];

// Middleware to serve static files (HTML, CSS, JS)
app.use(express.static('public'));
app.use(bodyParser.json());

// API endpoint to get a random joke
app.get('/joke', (req, res) => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const joke = jokes[randomIndex];
    res.json({ joke });
    console.log("Somebody made a joke GET request.");
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});