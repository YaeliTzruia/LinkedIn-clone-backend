const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    firstName: { type: String },
    middleName: { type: String },
    lastName: { type: String },
    birthday: { type: String },
    country: { type: String },
    city: { type: String },
    address: { type: String },
    profileImg: { type: String },
    headerImg: { type: String },
    headline: { type: String },
    profession: { type: String },
    industry: { type: String },
    education: { type: String },
    userSummary: { type: String },
    phone: { type: String },
    phoneType: { type: String },
    website: {
      websiteURL: { type: String },
      websiteType: { type: String },
    },
    link: { type: String },
    linkText: { type: String },
    posts: [{ text: { type: String } }],
  },
  {
    timestamps: true,
  }
);

userSchema.methods.toProfileJSON = function () {
  return {
    email: this.email,
    firstName: this.firstName,
    middleName: this.middleName,
    lastName: this.lastName,
    birthday: this.birthday,
    country: this.country,
    city: this.city,
    address: this.address,
    profileImg: this.profileImg,
    headerImg: this.headerImg,
    headline: this.headline,
    profession: this.profession,
    industry: this.industry,
    education: this.education,
    userSummary: this.userSummary,
    phone: this.phone,
    phoneType: this.phoneType,
    website: this.website,
    websiteURL: this.websiteURL,
    websiteType: this.websiteType,
    link: this.link,
    linkText: this.linkText,
    posts: this.posts,
    text: this.text,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

const User = mongoose.model("User", userSchema);

module.exports = User;
