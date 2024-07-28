const mongoose = require('mongoose');

// MongoDB Cloud URI
const uri = "mongodb://@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority"; // mongodb://localhost:27017   --- Prof added test1 instead of @cluster0

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Cloud'))
  .catch((err) => console.error('Connection error', err));