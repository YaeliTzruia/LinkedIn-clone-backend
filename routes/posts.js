const express = require("express");
const route = express.Router();

const PostController = require("../controllers/posts");
const authCheck = require("../middlewares/authCheck");

route.get("/", PostController.getAll);
route.post("/addPost", PostController.newPost);
// route.get("/post", PostController.getPost);
route.get("/:userId", PostController.getByUserId);
route.get("/:postId", PostController.getById);
route.put("/:postId", PostController.updatePost);
route.post("/:postId", PostController.updatePost);

module.exports = route;
