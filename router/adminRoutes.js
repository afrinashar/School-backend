// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
//const passport = require('passport');
const Admin = require('../models/admin');

// Admin login route
//router.post('/login', passport.authenticate('local', {
//   successRedirect: '/admin/dashboard',
//   failureRedirect: '/admin/login',
//   failureFlash: true,
// }));

// Admin dashboard route (protected)
router.get('/dashboard', (req, res) => {
  // Check if the user is authenticated
  if (req.isAuthenticated() && req.user.role === 'admin') {
    // Render admin dashboard
    res.send('Admin Dashboard');
  } else {
    // Redirect to login if not authenticated
    res.redirect('/admin/login');
  }
});

module.exports = router;

// Repeat the above code for studentRoutes.js and teacherRoutes.js with appropriate routes.
