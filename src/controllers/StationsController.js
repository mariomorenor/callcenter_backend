const { Station } = require("../db/models/Stations");

const index = async () => {
  return await Station.findAll({ order: [["name", "asc"]] });
};

const store = async ({ ip_address, name }) => {
  const station = await Station.create({
    ip_address,
    name,
  });
  return station;
};

const edit = async ({ id }) => {
  const station = await Station.findByPk(id);
  return station;
};

const update = async ({ id, ip_address, name, connected }) => {
  const station = await Station.update(
    {
      ip_address,
      name,
      connected
    },
    {
      where: {
        id,
      },
    }
  );
  return station;
};

const destroy = async ({ id }) => {
  const deleted = await Station.destroy({
    where: {
      id,
    },
  });
  return deleted;
};

module.exports = {
  index,
  edit,
  update,
  store,
  destroy,
};
