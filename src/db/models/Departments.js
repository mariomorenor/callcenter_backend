const { DataTypes } = require("sequelize");
const { sequelize } = require("../index");

const Department = sequelize.define("department", {
  peer_id: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Department.sync();

module.exports.Department = Department;
