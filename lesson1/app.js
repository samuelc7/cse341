const express = require("express");
const app = express();
const port = process.env.PORT;

app.use('/', require('./routes'));

app.listen(port, () => {
    console.log("Listening on port " + port);
})