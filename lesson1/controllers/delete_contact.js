const connection = require("../DB/Connection");
const DB = new connection();

const newContact = async (req, res) => {
    const jsonBody = req.body;
    const dbResults = await DB.deleteContact(jsonBody);

    if (dbResults == 500) {
        res.sendStatus(dbResults);
    } else {
        res.send(dbResults["insertedId"]);
    }
}

module.exports = newContact;