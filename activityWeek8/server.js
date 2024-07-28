const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// Custom logging middleware
app.use((req, res, next) => {
  const logMessage = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
  accessLogStream.write(logMessage);
  console.log(logMessage.trim());
  next();
});

// Built-in middleware for parsing JSON and serving static files
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Error-handling middleware
app.use((err, req, res, next) => {
  const errorMessage = `${new Date().toISOString()} - Error: ${err.stack}\n`;
  accessLogStream.write(errorMessage);
  console.error(errorMessage.trim());
  res.status(500).send('Something broke!');
});

// Log server start
app.listen(port, () => {
  const startMessage = `${new Date().toISOString()} - Server started and running at http://localhost:${port}\n`;
  accessLogStream.write(startMessage);
  console.log(startMessage.trim());
});