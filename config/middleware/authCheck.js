// // This is middleware for restrictng routes a user is not allowed to visit if not logged in
// module.exports = function(req, res, next) {
//   // If the user is logged in, continue with the request to the restricted route
//   if (req.user) {
//     return next();
//   }
//   // If the user isnt' logged in, redirect them to the login page
//   return res.redirect("/");
// };
const jwt    = require('jsonwebtoken');
var User     = require('../../models/User');
const config = require('../extra-config');


/**
 *  The Auth Checker middleware function.
 */
module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).end();
  }

  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(' ')[1];

  // decode the token using a secret key-phrase
  return jwt.verify(token, config.jwtSecret, (err, decoded) => {
    // the 401 code is for unauthorized status
    if (err) { return res.status(401).end(); }

    const userId = decoded.sub;

    // check if a user exists
    return User.findById(userId, (userErr, user) => {
      if (userErr || !user) {
        return res.status(401).end();
      }

      return next();
    });
  });
};