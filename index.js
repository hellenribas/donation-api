const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/routes");
const { errors } = require("./middlewares/messages");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json({ limit: "50mb" }));

app.use(
  cors({
    origin: "*",
  })
);

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
  app.use("/", router);
  app.use(errors);
});

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
