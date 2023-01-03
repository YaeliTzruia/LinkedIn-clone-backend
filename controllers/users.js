const ErrorHandler = require("../lib/errorHandler");
const usersService = require("../services/users");

const updateUser = async (req, res) => {
  try {
    const id = req.params.userId;
    const item = req.body;
    await usersService.update(id, item);
    res.send({ status: "success", message: "User Updated", updatedInfo: item });
  } catch (err) {
    console.log(err);
    return err;
  }
};

const getById = async (req, res) => {
  try {
    const user = await usersService.getById(req.params.userId);
    res.send({ status: "success", user: user });
  } catch (error) {
    console.log(error);
    return error;
  }
};
const getUser = async (req, res) => {
  try {
    console.log(req.user._id, "req");
    const id = req.user._id;
    const user = req.user.toProfileJSON();
    const signedInUser = { ...user, id };
    res.send({ status: "success", signedInUser });
  } catch (error) {
    res.status(400).send(ErrorHandler.badRequest());
    console.log(error);
    // return error;
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("JWT");
    res.json({ status: "success", message: "Logged out" });
  } catch (error) {
    res.status(400).send(ErrorHandler.badRequest());
    console.log(error);
  }
};

module.exports = { updateUser, getById, getUser, logout };
