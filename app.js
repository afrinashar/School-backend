const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
//const passport = require('./config/passport');
const userRoutes = require('./router/userRoutes');
const adminRoutes = require('./router/adminRoutes')
const studentRouter = require('./router/studentRouter');
const teacherRouter = require('./router/teacherRouter');
var cors = require('cors');
require('dotenv').config()
const app = express();
app.use(express.json());
app.use(cors());
// Connect to MongoDB
mongoose.connect( process.env.SECRET_KEY, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Configure middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
//app.use(passport.initialize());
//app.use(passport.session());

// Use the student router
app.use(userRoutes);
app.use('/admin', adminRoutes);
app.use('/students', studentRouter);
app.use('/teachers', teacherRouter);
// Start the server
const PORT = process.env.PORT||3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
