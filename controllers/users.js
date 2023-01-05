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
    console.log(req.user, "req");
    const id = req.user._id;
    const user = req.user.toProfileJSON();
    const signedInUser = { ...user, id };
    console.log(signedInUser, "signedInUser");
    res.send({ status: "success", signedInUser });
  } catch (error) {
    res.status(400).send(ErrorHandler.badRequest());
    console.log(error);
    // return error;
  }
};

module.exports = { updateUser, getById, getUser };
