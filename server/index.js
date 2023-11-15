const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const notFound = require("./middleware/not_found");
const errorHandlerMiddleware = require("./middleware/error_handler");
const workout = require("./routes/workout");

const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Project_N";

app.use(express.json());
app.use(cors());

app.use("/api/v1/workouts", workout);
app.use(notFound);
app.use(errorHandlerMiddleware);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
