const connection = require("../DB/Connection");
const DB = new connection();

const contact = async (req, res) => {
    try {
        const result =  await DB.showContact(req.params.id);
        res.send(result);
    } catch(e) {
        console.error(e);
    }
};

module.exports = contact;