const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const { User } = require("../db/models/User");

dotenv.config();

const secret_token = process.env.JWT_TOKEN;

const router = require("express").Router();

router.post("/login", async (req, res) => {
  const result = await User.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (result) {
    const isValid = await bcrypt.compare(
      req.body.password,
      result.get("password")
    );

    if (!isValid) {
      res.send({
        error: "Contraseña Incorrecta!",
      });
    } else {
      const token = jwt.sign(result.get(), secret_token, {
        expiresIn: 60,
      });

      res.header("auth-token", token).json(result);
    }
  } else {
    res.send({
      error: "Usuario no existe!",
    });
  }
});

module.exports = router;
