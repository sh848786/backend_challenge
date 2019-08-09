'use strict';

const jwt = require('jsonwebtoken'),
      tokenSecret = "thisisteamtoken";

module.exports = {
  // Generates a token from supplied payload
  issue(payload) {
    return jwt.sign(
      payload,
      tokenSecret, // Token Secret that we sign it with
      {
        expiresIn: "60 minutes" // Token Expire time
      });
  },

  // Verifies token on a request
  verify(token, callback) {
    return jwt.verify(
      token, // The token to be verified
      tokenSecret, // Same token we used to sign
      {}, // No Option
      callback //Pass errors or decoded token to callback
    );
  }
};
