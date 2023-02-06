const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    userFullName: { type: String, required: true },
    // userImage: { type: String, required: true },
    // headline: { type: String, required: true },
    text: { type: String },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

postSchema.methods.toProfileJSON = function () {
  return {
    post: this.post,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
