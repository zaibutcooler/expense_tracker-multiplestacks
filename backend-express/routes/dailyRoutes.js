const express = require("express");
const router = express.Router();
const controller = require("../controllers/dailyController");

router.get("", controller.getAll);

router.get("/:id", controller.getOne);

router.post("", controller.createOne);

router.patch("", controller.updateOne);

router.delete("", controller.deleteOne);

module.exports = router;
