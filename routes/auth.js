const express = require("express");
const route = express.Router();

const authController = require("../controllers/auth");
const signupSchema = require("../DTO/schema/signupSchema");
const signinSchema = require("../DTO/schema/signinSchema");
const validate = require("../DTO/validator");

route.post("/signup", validate(signupSchema), authController.register);
route.post("/signin", validate(signinSchema), authController.login);

module.exports = route;
