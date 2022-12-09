const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is up and running ");
});
app.get("/message", (req, res) => {
  res.send({ message: "this is the msg" });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
