const express = require("express");
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");
const router = require("./routes/routes");
const { errors } = require("./middlewares/messages");
const cors = require("cors");
require("dotenv").config();
const Parse = require("parse");

const app = express();

app.use(express.json({ limit: "50mb" }));

app.use(
  cors({
    origin: "*",
  })
);

// const client = new MongoClient(process.env.DATABASE_URL, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     console.log("run");

//     await client.connect();
//     console.log("CONNECTED");
//     // Send a ping to confirm a successful connection
//     await client.db("Donation-Website").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

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

// Parse.initialize(
//   process.env.PARSE_APPLICATION_ID,
//   process.env.PARSE_JAVASCRIPT_KEY
// );
// Parse.serverURL = process.env.PARSE_HOST_URL;

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
