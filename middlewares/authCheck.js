const jwt = require("jsonwebtoken");
const User = require("../lib/models/users");
const secret = process.env.JWT_SECRET;
const ErrorHandler = require("../lib/errorHandler");

const authCheck = async (req, res, next) => {
  const token = req.cookies.JWT;

  console.log(token, "JWT");
  if (token) {
    return jwt.verify(token, secret, async (err, decoded) => {
      try {
        console.log(decoded, "decoded.id");
        const signedInUser = await User.findById(decoded.id);
        console.log(signedInUser, "signedInUser");
        if (!signedInUser) {
          res.status(404).send(ErrorHandler.tokenNotFound());
        }
        req.user = signedInUser;
        return next();
      } catch (err) {
        res.status(404).send(ErrorHandler.invalidToken());
      }
    });
  }

  res.status(401).send(ErrorHandler.needLogin());
};

module.exports = authCheck;
