const {_, _1, showContact} = require("../DB/Connection");

const contact = async (req, res) => {
    try {
    const result = await showContact(req.params.id);
    res.send(result);
    } catch(e) {
        console.error(e);
    }
};

module.exports = contact;