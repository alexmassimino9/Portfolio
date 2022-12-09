const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const path = require("path");
const app = express();
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is up and running ");
});
app.get("/message", (req, res) => {
  res.send({ message: "this is the msg" });
});
