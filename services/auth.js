const hashLib = require("../lib/hashed");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET = process.env.JWT_SECRET;

const generateHash = (password) => {
  const hash = hashLib.hash(password);
  return hash;
};

const validateHash = (hashedPassword, password) => {
  const hash = hashLib.check(hashedPassword, password);
  return hash;
};

const generateToken = (id) => {
  const expireInOneYear = Date.now() + 1000 * 60 * 60 * 24 * 365;
  const token = jwt.sign(
    {
      id: id,
      exp: expireInOneYear,
    },
    SECRET
  );
  console.log("generate token:", token);
  return token;
};

module.exports = { generateHash, validateHash, generateToken };
