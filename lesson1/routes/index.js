const routes = require("express").Router();

routes.get("/", (req, res) => {
    res.send("Janessa Anderson");
});

module.exports = routes;