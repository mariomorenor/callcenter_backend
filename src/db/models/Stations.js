const { DataTypes } = require("sequelize");
const { sequelize } = require("../index");

const Station = sequelize.define("station", {
  ip_address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type:DataTypes.STRING,
    allowNull:false,
  },
  connected: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

Station.sync();

module.exports.Station = Station;
