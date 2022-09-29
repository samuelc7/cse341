const connection = require("../DB/Connection");
const DB = new connection();

const newContact = async (req, res) => {
    const jsonBody = req.body;
    const dbResults = await DB.updateContact(jsonBody);

    if (dbResults == 500) {
        res.sendStatus(dbResults);
    } else {
        res.sendStatus(204);
    }

}

module.exports = newContact;