const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    country: { type: String },
    city: { type: String },
    profileImg: { type: String },
    headerImg: { type: String },
    professon: { type: String },
    userSummary: { type: String },
    phone: { type: String },
  },
  {
    timestamps: true,
  }
);
// country/region
// city/district

userSchema.methods.toProfileJSON = function () {
  return {
    email: this.email,
    firstName: this.firstName,
    lastName: this.lastName,
    country: this.country,
    city: this.city,
    professon: this.professon,
    userSummary: this.userSummary,
    phone: this.phone,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

const User = mongoose.model("User", userSchema);

module.exports = User;
