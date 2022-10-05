const dotenv = require("dotenv"); // For enviornment vars
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();

const express = require("express");
const app = express();
const port = process.env.PORT;

const connection = require("./DB/Connection");
const DB = new connection();
DB.connectDB();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Request-With, Content-Type, Accept, Z-key"
    );
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});
app.use('/', require('./routes'));

app.listen(port, () => {
    console.log("Listening on port " + port);
})

/*
 *  General Layout: 
 *  app.js -> routes/index.js -> controllers/index.js 
 * 
 */

