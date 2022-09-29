const connection = require("../DB/Connection");
const DB = new connection();

const contacts = async (req, res) => {
    try {
    const results = await DB.showAllContacts();
    res.send(results);
    } catch(e) {
        console.error(e);
    }
};

module.exports = contacts;
