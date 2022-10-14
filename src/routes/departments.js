const express = require("express");
const { Department } = require("../db/models/Departments");

const router = express.Router();

router.post("/departments", async (req, res) => {
  const result = await Department.findAll();
  res.send(result);
});

router.post("/department/store", async (req, res) => {
  try {
    const result = await Department.create({
      peer_id: req.body.peer_id,
      name: req.body.name,
    });
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

router.post("/department/:id/update", async (req, res) => {
  try {
    const result = await Department.update(
      {
        peer_id: req.body.peer_id,
        name: req.body.name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

router.post("/department/:id/delete", async (req, res) => {
  try {
    const result = await Department.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send({
      rows: result,
    });
  } catch (error) {
    res.send(error);
  }
});

module.exports.departments = router;
