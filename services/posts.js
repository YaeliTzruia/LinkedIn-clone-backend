const Post = require("../lib/models/posts");
const ErrorHandler = require("../lib/errorHandler");

const sendNew = async (post) => {
  try {
    const newPost = new Post(post);
    const save = await newPost.save();
    return save;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const update = async (id, item) => {
  try {
    const posts = await Post.findByIdAndUpdate(id, item);
    return posts;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getById = async (id) => {
  try {
    const postId = await Post.findById(id);
    return postId;
  } catch (error) {
    return error;
  }
};
const getByUserId = async (id) => {
  try {
    const postId = await Post.find(id);
    return postId;
  } catch (error) {
    return error;
  }
};

const findAll = async (req, res) => {
  try {
    const allPosts = await Post.find({});
    return allPosts;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//   const findByEmail = async (email) => {
//     try {
//       const findEmail = await User.findOne({ email });
//       if (!findEmail) {
//         return ErrorHandler.EmailNotFound();
//       }
//       return findEmail;
//     } catch (err) {
//       return err;
//     }
//   };

module.exports = { update, getById, findAll, sendNew, getByUserId };
