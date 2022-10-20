const bcrypt = require("bcrypt");
const { User } = require("../db/models/User");

const login = async ({ email, password }) => {
  const result = await User.findOne({
    where: {
      email,
    },
  });

  return result ? await bcrypt.compare(password, result.get("password")) : null;
};

module.exports = {
  login
};
