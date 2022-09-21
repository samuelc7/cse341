const router = require("express").Router();

router.get("/", require("../controllers/contacts"));

router.get("/:id", require("../controllers/contact"));

module.exports = router;