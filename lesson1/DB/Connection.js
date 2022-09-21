const dotenv = require("dotenv"); // For enviornment vars
dotenv.config();

const mongoose = require('mongodb');

const URI = process.env.CONN;
const client = new mongoose.MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
    try {
        await client.connect();
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Database connected.");
        client.close()
    }
}

async function showAllContacts() {
    await client.connect();
    const pointer = client.db("Cluster0")
                    .collection("contacts")
                    .find();

    const results = await pointer.toArray();
    client.close();
    return results;
}

async function showContact(id) {
    await client.connect();
    const pointer = client.db("Cluster0")
                    .collection("contacts")
                    .find();

    const results = await pointer.toArray();
    client.close();
    
    const contact = results.filter( c => c._id == id);
    return contact;
}



module.exports = { connectDB, showAllContacts, showContact};