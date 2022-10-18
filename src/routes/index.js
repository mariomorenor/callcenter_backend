const dotenv = require("dotenv");
const express = require("express");

dotenv.config();

const router = express.Router();


router.post("/home", (req, res) => {
  res.send("poosi");
});

module.exports.router = router;
