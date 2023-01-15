const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(morgan("combined"));
//bodyParser is needed in order to send the data to db, without it the req,body comes back as undefined or null
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
const AuthRoutes = require("./routes/auth");
const UserRoutes = require("./routes/users");

const storage = multer.diskStorage({
  //cb = callback
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, "profile-image--" + file.originalname);
  },
});
const upload = multer({ storage: storage });

app.get("/uploads", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
  res.send("uploaded");
});

app.post("/uploads", upload.single("image"), (req, res) => {
  console.log(req, "req");
  res.send(`http://localhost:5001/uploads/${req.file.filename}`);
});

// routes
app.use("/uploads", express.static(`${__dirname}/uploads`));
app.use("/auth", AuthRoutes);
app.use("/user", UserRoutes);

mongoose.set("strictQuery", true);

mongoose
  .connect("mongodb://localhost:27017/LinkedIn", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`our server is running on port: ${PORT}`);
    });
  })
  .catch((err) => console.log(err, "mongo error"));

// app.listen(PORT, () => {
//         console.log(`our server is running on port: ${PORT}`);
//       });
