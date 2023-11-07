const express = require('express');
const mongoose = require('mongoose');
const studentRouter = require('./studentRouter');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://afrin:961215106001@cluster0.hbkqtqv.mongodb.net/students', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use the student router
app.use('/students', studentRouter);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
