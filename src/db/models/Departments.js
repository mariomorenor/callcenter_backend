const { DataTypes } = require("sequelize");
const { sequelize } = require("../index");

const Department = sequelize.define("department", {
  peer_id: {
    type: DataTypes.STRING,
    unique: true,
  },
  name: DataTypes.STRING,
});

Department.sync();

module.exports.Department = Department;
