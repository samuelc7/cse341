const router = require("express").Router();
const index = require("../controllers/index");

const routes = router.get("/", index);
module.exports = routes;