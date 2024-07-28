/*const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/submit', (req, res) => {
    const name = req.body.name;
    res.send(`Hello, ${name}! Your form was submitted successfully.`);
});

app.post('/user/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}!`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
*/

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse URL-encoded bodies (form data)
app.use(express.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const formData = req.body;
    res.send(`
        <h1>Form Data Received</h1>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Gender:</strong> ${formData.gender}</p>
        <p><strong>Hobbies:</strong> ${Array.isArray(formData.hobbies) ? formData.hobbies.join(', ') : formData.hobbies}</p>
        <p><strong>Country:</strong> ${formData.country}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
    `);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});