const router = require("express").Router();
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const middlewareToken = require("../middlewares/authentication");
dotenv.config();

const secret = process.env.JWT_TOKEN;
const stationsPassword = process.env.JWT_PASSWORD_STATIONS;

const loginController = require("../controllers/LoginController");
const departmentController = require("../controllers/DepartmentsController");


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

router.get("/test-connection", middlewareToken, (req, res) => {
  res.json({
    message: "Conexión Exitosa!, Hurray...!!!",
  });
});

router.post("/get-token-for-stations", (req, res) => {
  if (req.body.password == stationsPassword) {
    const token = jwt.sign({}, secret);
    res.header("token",token).json({ token: token });
  }else{
    res.status(401).json({
      message:"Cliente no Autorizado!"
    })
  }
});

router.get("/api/departments", (req, res) => {
  departmentController.index().then((result) => {
    res.json(result);
  });
});

module.exports = router;
