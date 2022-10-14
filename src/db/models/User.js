const { DataTypes } = require("sequelize");
const { sequelize } = require("../index");
const bcrypt = require("bcrypt");

const User = sequelize.define("user", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
});

User.sync();

bcrypt.hash("admin", 10).then((hashedPassword) => {
  User.create({
    name: "Administrador",
    email: "admin",
    password: hashedPassword,
  });
});

module.exports.User = User;
