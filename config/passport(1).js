// config/passport.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Admin = require('../models/admin');

passport.use('admin', new LocalStrategy((username, password, done) => {
  Admin.findOne({ username: username }, (err, admin) => {
    if (err) return done(err);
    if (!admin) return done(null, false, { message: 'Incorrect username.' });
    if (admin.password !== password) return done(null, false, { message: 'Incorrect password.' });
    return done(null, admin);
  });
}));

// Repeat the above code for student and teacher strategies with appropriate models.
