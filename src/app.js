const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const loginController = require("./controllers/LoginController");
const HomeController = require("./controllers/HomeController");

const verifyToken = require("./middlewares/authentication");

require("./PeerServer");

dotenv.config();

const port = process.env.SERVER_PORT || 9090;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server Online");
});

app.use("/auth", loginController);
app.use("/", verifyToken, HomeController);

app.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
});
