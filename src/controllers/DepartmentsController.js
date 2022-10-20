const { Department } = require("../db/models/Departments");

const index = async () => {
  return await Department.findAll({ order: [["peer_id", "asc"]] });
};

const store = async ({ peer_id, name }) => {
  const department = await Department.create({
    peer_id,
    name,
  });
  return department;
};

const edit = async ({ id }) => {
  const department = await Department.findByPk(id);
  return department;
};

const update = async ({ id, peer_id, name }) => {
  const department = await Department.update(
    {
      peer_id,
      name,
    },
    {
      where: {
        id,
      },
    }
  );
  return department;
};

const destroy = async ({ id }) => {
  const deleted = await Department.destroy({
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
