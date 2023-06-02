const express = require("express");
const router = express.Router();
const controller = require("../controllers/dailyController");

router.get("", controller.getAll);

router.get("/:id", controller.getOne);

router.post("", controller.createOne);

router.patch("/:id", controller.updateOne);

router.delete("/:id", controller.deleteOne);

module.exports = router;
