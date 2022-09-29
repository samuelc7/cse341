const connection = require("../DB/Connection");
const DB = new connection();

const newContact = async (req, res) => {
    
    const jsonBody = req.body;
    
    if (jsonBody["firstName"] && jsonBody["lastName"] && 
        jsonBody["birthDay"] && jsonBody["favoriteColor"] &&
        jsonBody["email"]) {

            const dbResults = await DB.addContact(req.body);

            if (dbResults == 500) {
                res.sendStatus(dbResults);
            } else {
                res.send(dbResults["insertedId"]);
            }
    } else {
        res.statusMessage = "firstName, lastName, email, birthDay, and favoriteColor fields are required.";
        res.status(400).end();
    }

    

}

module.exports = newContact;