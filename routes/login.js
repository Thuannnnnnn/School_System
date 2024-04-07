const express = require('express');
const session = require('express-session'); // Import express-session
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();
const router = express.Router();


router.use(session({
    secret: 'abc',
    resave: false,
    saveUninitialized: false
}));

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
},
    function (accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));

router.get('/google',
    passport.authenticate('google', { scope: ['profile','email'] })
);

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    function (req, res) {
       
        if (req.user && req.user.emails && req.user.emails.length > 0) {
            
            console.log(req.user.emails[0].value);
        } else {
            console.log("Không có email được cung cấp");
        }
        res.redirect('/success');
    }
);

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});
module.exports = router;
