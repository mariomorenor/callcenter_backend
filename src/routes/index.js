const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../db/models/User");

const router = express.Router();

router.post("/login", async (req, res) => {
  const result = await models.User.findOne({
    where: {
      email: req.body.email,
    },
  });

  const response = {
    access: false,
    error: null,
    user: null,
  };

  if (result) {
    const isValid = await bcrypt.compare(
      req.body.password,
      result.get("password")
    );
    response.access = isValid;
    response.error = isValid ? null : "Password Incorrecto";
    response.user = isValid ? result : null;
    res.send(response);
  } else {
    response.error = "Usuario no Existe";
    res.send(response);
  }
});

module.exports.router = router;
