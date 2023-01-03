const User = require("../lib/models/users");
const usersService = require("../services/users");
const ErrorHandler = require("../lib/errorHandler");
const authService = require("../services/auth");
const cookieSettings = require("../DTO/auth/cookie");

const register = async (req, res, next) => {
  console.log("res-", res.clearCookie, "-res");
  res.clearCookie("JWT");
  const addUser = { ...req.body };
  const hashed = authService.generateHash(addUser.password);
  const newUser = new User({ ...req.body, password: hashed });

  try {
    await newUser.save();
    const token = authService.generateToken(newUser._id);
    res.cookie("JWT", token, cookieSettings);
    res.json({ status: "success", newUser });
    console.log(newUser, "newUser");
    // res.send("user");
  } catch (err) {
    console.log(err);
    res.status(409).send(ErrorHandler.userAlreadyExists());
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await usersService.findByEmail(email);
    const isValid = authService.validateHash(password, user.password);
    if (!isValid) {
      res.status(403).send(ErrorHandler.IncorrectPassword());
    } else if (isValid) {
      const token = authService.generateToken(user._id);
      res.cookie("JWT", token, cookieSettings);
      res.json({ status: "success", message: "Logged in", user, token });
    }
  } catch (err) {
    res.status(404).send(ErrorHandler.EmailNotFound());
  }
};

module.exports = { register, login };
