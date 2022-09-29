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
                res.status(201);
                res.send(dbResults["insertedId"]);
            }
    } else {
        res.status(400);
        res.send("firstName, lastName, email, birthDay, and favoriteColor fields are required.");
    }

    

}

module.exports = newContact;