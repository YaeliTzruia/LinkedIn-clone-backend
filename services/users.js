const User = require("../lib/models/users");
const ErrorHandler = require("../lib/errorHandler");

const update = async (id, item) => {
  try {
    const users = await User.findByIdAndUpdate(id, item);
    return users;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const getById = async (id) => {
  try {
    const userId = await User.findById(id);
    return userId;
  } catch (err) {
    return err;
  }
};

const findByEmail = async (email) => {
  try {
    const findEmail = await User.findOne({ email });
    if (!findEmail) {
      return ErrorHandler.EmailNotFound();
    }
    return findEmail;
  } catch (err) {
    return err;
  }
};

module.exports = { update, getById, findByEmail };
