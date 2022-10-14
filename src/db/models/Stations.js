const { DataTypes } = require("sequelize");
const { sequelize } = require("../index");

const Station = sequelize.define("station", {
  ip_address: DataTypes.STRING,
  name: DataTypes.STRING,
  connected: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

Station.sync();

module.exports.Station = Station;
