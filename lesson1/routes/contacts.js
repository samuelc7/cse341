const router = require("express").Router();

router.get("/", require("../controllers/contacts"));

router.get("/:id", require("../controllers/contact"));

router.post("/new", require("../controllers/new_contact"));

router.put("/update", require("../controllers/update_contact"));

router.delete("/delete", require("../controllers/delete_contact"));

module.exports = router;