const router = require("express").Router();
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config();

const secret = process.env.JWT_TOKEN;

const loginController = require("../controllers/LoginController");

router.post("/login", (req, res) => {
  loginController
    .login({ email: req.body.email, password: req.body.password })
    .then((result) => {
      switch (result) {
        case true:
          const token = jwt.sign({}, secret, { expiresIn: 1800 });
          res.header("token", token).json({
            message: "Acceso Autorizado",
          });
          break;
        case false:
          res.status(403).json({
            message: "Contraseña Incorrecta!",
          });
          break;

        default:
          res.status(404).json({
            message: "Usuario no Encontrado!",
          });
          break;
      }
    });
});

module.exports = router;
