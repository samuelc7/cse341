const dotenv = require("dotenv"); // For enviornment vars
dotenv.config();

const express = require("express");
const app = express();
const port = process.env.PORT;

const { connectDB, _ } = require("./DB/Connection");
connectDB();

app.use('/', require('./routes'));

app.listen(port, () => {
    console.log("Listening on port " + port);
})

/*
 *  General Layout: 
 *  app.js -> routes/index.js -> controllers/index.js 
 * 
 */

