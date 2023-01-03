const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    // firstname:{ type: String, required: true },
    // lastname:{ type: String, required: true },
    // country:{ type: String, required: true },
    // city:{ type: String, required: true },
    // profileImg:{ type: String},
    // headerImg:{ type: String },
    // professon:{ type: String },
    // userSummary:{ type: String },
    // phone:{ type: String},
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
    firstname: this.firstname,
    lastname: this.lastname,
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
