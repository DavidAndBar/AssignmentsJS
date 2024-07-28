const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// Connect to SQLite database
const db = new sqlite3.Database('./PeanutsBookstore.db', (err) => {
    if (err) {
        console.error('Could not connect to database', err);
    } else {
        console.log('Connected to database');
    }
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Online Bookstore!');
});
app.get('/books/new', (req, res) => {
    res.render('newBook');
});

app.post('/books', (req, res) => {
    const { title, author, genre, price } = req.body;
    db.run(`INSERT INTO books (title, author, genre, price) VALUES (?, ?, ?, ?)`, [title, author, genre, price], function (err) {
        if (err) {
            return console.log(err.message);
        }
        res.send('Book successfully added!');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

