/*const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse URL-encoded data from the form
app.use(bodyParser.urlencoded({ extended: true }));

// Route to serve the HTML form
app.get('/', (req, res) => {
    res.send(`
        <html>
            <body>
                <form action="/echo" method="post">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name"><br><br>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email"><br><br>
                    <input type="submit" value="Submit">
                </form>
            </body>
        </html>
    `);
});

// Route to handle form submission and echo back the data
app.post('/echo', (req, res) => {
    const { name, email } = req.body;
    res.send(`
        <html>
            <body>
                <h1>Form Data Echo</h1>
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <a href="/">Go back to the form</a>
            </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
*/

const express = require('express');
const app = express();
const port = 3000;

// List of jokes with setups and punchlines
const jokes = [
    { setup: "Why did the Borg go to the disco?", punchline: "Because they wanted to assimilate the dance floor!" },
    { setup: "How many ears does Captain Kirk have?", punchline: "Three - left ear, right ear, and final front-ear!" },
    { setup: "Why don't Vulcans like playing hide and seek?", punchline: "Because good luck trying to find someone who can mind meld to cheat!" },
    { setup: "What do you get when you cross a Tribble with a Klingon?", punchline: "A hairy warrior who multiplies in battle!" },
    { setup: "Why did the Romulan stop playing hide and seek?", punchline: "Because they were always cloaked when they tried to hide!" },
    { setup: "What do you call a Cardassian who loves to eat ice cream?", punchline: "Gul Dukat!" },
    { setup: "Why did the Klingon brush his teeth?", punchline: "To avoid the wrath of a disgruntled Worf!" },
    { setup: "What's a Borg's favorite kind of music?", punchline: "Anything with a lot of assimilation beats!" },
    { setup: "How do you know if you're attending a party thrown by Q?", punchline: "When you find yourself in a different universe every 5 minutes!" },
    { setup: "Why did the Ferengi bring a ladder to the Starfleet Academy?", punchline: "To climb the ranks faster than anyone else!" }
];

// Middleware to serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// API endpoint to get jokes
app.get('/jokes', (req, res) => {
    res.json(jokes);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});