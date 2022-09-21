const router = require("express").Router();

router.use("/contacts", require("./contacts"));
router.use("/", require("../controllers/index"));

module.exports = router;