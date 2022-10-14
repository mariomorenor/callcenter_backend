const express = require("express");
const { Station } = require("../db/models/Stations");

const router = express.Router();

router.post("/stations", async (req, res) => {
  const result = await Station.findAll();
  res.send(result);
});

router.post("/station/store", async (req, res) => {
  try {
    const result = await Station.create({
      ip_address: req.body.ip_address,
      name: req.body.name,
      connected: req.body.connected,
    });
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

router.post("/station/:id/update", async (req, res) => {
  try {
    const result = await Station.update(
      {
        ip_address: req.body.ip_address,
        name: req.body.name,
        connected: req.body.connected,
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

router.post("/station/:id/delete", async (req, res) => {
  try {
    const result = await Station.destroy({
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

module.exports.stations = router;
