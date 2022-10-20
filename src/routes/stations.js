const router = require("express").Router();

const stationsController = require("../controllers/StationsController");

router.get("/stations", (req, res) => {
  stationsController.index().then((result) => {
    res.json(result);
  });
});

router.post("/stations", (req, res) => {
  stationsController
    .store({
      peer_id: req.body.peer_id,
      name: req.body.name,
    })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).json(err.errors);
    });
});

router.delete("/stations/:id/destroy", (req, res) => {
  stationsController
    .destroy({ id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).json(err.errors);
    });
});

router.get("/stations/:id/edit", (req, res) => {
  stationsController
    .edit({ id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).json(err.errors);
    });
});

router.put("/stations/:id/update", (req, res) => {
  stationsController
    .update({
      id: req.params.id,
      name: req.body.name,
      peer_id: req.body.peer_id,
    })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).json(err.errors);
    });
});

module.exports = router;
