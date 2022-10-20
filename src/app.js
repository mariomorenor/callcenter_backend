// Global Imports
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Peer Server
require("./PeerServer");

// .env Vars
dotenv.config();

// Server port
const port = process.env.SERVER_PORT || 9090;

// Initialize configurations
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Middlewares
const middlewareToken = require("./middlewares/authentication");

// Routes Imports
const indexRoutes = require("./routes");
const departmentsRoutes = require("./routes/departments");
const stationsRoutes = require("./routes/stations");

// Routes Definitions
app.use(indexRoutes);
app.use(middlewareToken, departmentsRoutes);
app.use(middlewareToken, stationsRoutes);

app.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
});
