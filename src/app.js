const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { router } = require("./routes");
const { departments } = require("./routes/departments");
const { stations } = require("./routes/stations");
require("./PeerServer");

dotenv.config();

const port = process.env.SERVER_PORT || 6969;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server Online");
});

app.use("/api", router);
app.use("/api", departments);
app.use("/api", stations);

app.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
});
