const express = require('express');
const session = require('express-session'); // Import express-session
const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {generateTokenAndRedirect} = require('../middleware/auth')
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
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    async function (req, res) {
        generateTokenAndRedirect(req, res)

    }
);

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});
module.exports = router;
