const router = require("express").Router();

const departmentController = require("../controllers/DepartmentsController");

router.get("/departments", (req, res) => {
  departmentController.index().then((result) => {
    res.json(result);
  });
});

router.post("/departments", (req, res) => {
  departmentController
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

router.delete("/departments/:id/destroy", (req, res) => {
  departmentController
    .destroy({ id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).json(err.errors);
    });
});

router.get("/departments/:id/edit", (req, res) => {
  departmentController
    .edit({ id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).json(err.errors);
    });
});

router.put("/departments/:id/update", (req, res) => {
  departmentController
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
