const ErrorHandler = require("../lib/errorHandler");
const postService = require("../services/posts");

const newPost = async (req, res) => {
  try {
    console.log(req.body);
    // const obj = { req.body };
    publish = postService.sendNew(req.body);
    res.send({ status: "success", post: req.body });
  } catch (error) {
    console.log(error);
    return error;
  }
};

const updatePost = async (req, res) => {
  try {
    const id = req.params.postId;
    const item = req.body;
    await postService.update(id, item);
    res.send({ status: "success", message: "Post Updated", updatedInfo: item });
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getById = async (req, res) => {
  try {
    const post = await postService.getById(req.params.postId);
    res.send({ status: "success", post: post });
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getByUserId = async (req, res) => {
  try {
    const postArray = { userId: { $in: [req.params.userId] } };
    const post = await postService.getByUserId(postArray);
    res.send({ status: "success", post: post });
  } catch (error) {
    console.log(error);
    return error;
  }
};
// const getPost = async (req, res) => {
//   try {
//     console.log(req.user, "req");
//     const id = req.user._id;
//     const user = req.user.toProfileJSON();
//     const signedInUser = { ...user, id };
//     console.log(signedInUser, "signedInUser");
//     res.send({ status: "success", signedInUser });
//   } catch (error) {
//     res.status(400).send(ErrorHandler.badRequest());
//     console.log(error);
//     // return error;
//   }

const getAll = async (req, res) => {
  try {
    const getPosts = await postService.findAll();
    res.send({ status: "success", allPosts: getPosts });
  } catch (error) {
    return error;
  }
};

module.exports = { getById, updatePost, getAll, newPost, getByUserId };
