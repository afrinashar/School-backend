const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
//const passport = require('./config/passport');
const adminRoutes = require('./router/adminRoutes')
const studentRouter = require('./router/studentRouter');
const teacherRouter = require('./router/teacherRouter');
const marksRouter =require('./router/others/marksRouter')
const materialRouter =require('./router/others/materialRouter')
const classRouter =require('./router/others/classRouter')
const noticeRouter =require('./router/others/noticeRouter')
const subjectRouter =require('./router/others/subjectRouter')
const timeTableRouter =require('./router/others/timeTableRouter')
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

// Use the users router
app.use('/admin', adminRoutes);
app.use('/students', studentRouter);
app.use('/teachers', teacherRouter);
//other Routers
app.use('/students/materials', materialRouter);
app.use('/students/marks', marksRouter);
app.use('/students/notice', noticeRouter);
app.use('/students/subject', subjectRouter);
app.use('/students/timetable', timeTableRouter);
app.use('/students/class', classRouter);
// Start the server
const PORT = process.env.PORT||3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
