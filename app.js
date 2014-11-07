var express = require('express')
  , http = require('http')
  , passport = require('passport')
  , util = require('util')
  , LinkedInStrategy = require('passport-linkedin').Strategy

var LINKEDIN_API_KEY = "77ts672cxn6wfk";
var LINKEDIN_SECRET_KEY = "GKy8lzvzAUi7secM";


// Use the LinkedInStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and LinkedIn profile), and
//   invoke a callback with a user object.
passport.use(new LinkedInStrategy({
    consumerKey: LINKEDIN_API_KEY,
    consumerSecret: LINKEDIN_SECRET_KEY,
    callbackURL: "http://arocho.herokuapp.com"
  },
  function(token, tokenSecret, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      // To keep the example simple, the user's LinkedIn profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the LinkedIn account with a user record in your database,
      // and return that user instead.
      return done(null, profile);
    });
  }
));


