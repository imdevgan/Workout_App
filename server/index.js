const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const notFound = require("./middleware/not_found");
const errorHandlerMiddleware = require("./middleware/error_handler");
const user = require("./routes/user");
const workout = require("./routes/workout");

const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Project_N";

//Middleware that parses json files
app.use(express.json());
//Middleware that lets frontend operate with the backend
app.use(cors());

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

app.use("/api/v1", user);
app.use("/api/v1/workouts", workout);
//Middleware that handles if a link is not availible
app.use(notFound);
//Middleware that handles errors
app.use(errorHandlerMiddleware);

//Connection to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
