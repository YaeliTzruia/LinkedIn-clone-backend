const Yup = require("yup");

const signinSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be a minimum of 6 characters")
    .max(50, "Password can have a maximum of 50 characters"),
});

module.exports = signinSchema;
