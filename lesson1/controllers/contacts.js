const {_, showAllContacts, _1} = require("../DB/Connection");

const contacts = async (req, res) => {
    try {
    const results = await showAllContacts();
    res.send(results);
    } catch(e) {
        console.error(e);
    }
};

module.exports = contacts;
