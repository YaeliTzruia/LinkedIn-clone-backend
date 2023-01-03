const Yup = require("yup");

const signupSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be a minimum of 6 characters")
    .max(50, "Password can have a maximum of 50 characters"),
  // firstname:Yup.string().required("First name is required").max(100, "Password can have a maximum of 100 characters"),
  // lastname:Yup.string().required("Last name is required").max(100, "Password can have a maximum of 100 characters"),
  // country:Yup.string().required("Country is required").max(100, "Password can have a maximum of 100 characters"),
  // city:Yup.string().required("City is required").max(100, "Password can have a maximum of 100 characters"),
  // profileImg:Yup.string(),
  // headerImg:Yup.string(),
});

module.exports = signupSchema;
