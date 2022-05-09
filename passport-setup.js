const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: "304566659380-uomoptqs40ph8qaatg64ku8t4ege9bn8.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));