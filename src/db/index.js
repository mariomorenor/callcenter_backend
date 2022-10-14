const { Sequelize } = require("sequelize");
const path = require("path");

const databasePath =
  process.env.NODE_ENV == "production"
    ? "database.sqlite"
    : path.resolve(__dirname, "..", "database.sqlite");

module.exports.sequelize = new Sequelize({
  dialect: "sqlite",
  storage: databasePath,
  logging: false,
});


