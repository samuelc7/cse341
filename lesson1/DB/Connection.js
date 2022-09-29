const dotenv = require("dotenv"); // For enviornment vars
dotenv.config();

const mongoose = require('mongodb');

const URI = process.env.CONN;

class DB {
    constructor() {
        this.client =  new mongoose.MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    }

    connectDB() {
        this.client = this.refresh()
        try {
            this.client.connect();
        } catch (e) {
            console.error(e);
        } finally {
            console.log("Database connected.");
            this.client.close()
        }
    }

    async showAllContacts() {
        this.client = this.refresh()
        this.client.connect();

        const pointer = this.client.db("Cluster0").collection("contacts").find();

        const results = await pointer.toArray();
        this.client.close();
        return results;
    }

    async showContact(id) {
        DB.client = this.refresh();
        DB.client.connect();
        const contact = await this.client.db("Cluster0").collection("contacts").findOne(
            {"_id" : mongoose.ObjectId(id)}
        );
        return contact;
    }


    async addContact(body) {
        this.client = this.refresh();
        this.client.connect()
      
        try {
            const result = await this.client.db("Cluster0").collection("contacts").insertOne(body);
            this.client.close()
            return result;
        } catch (e) {
            console.error("Could not create new user: " + e);
            this.client.close()
            return 500;
        }
    }

    async updateContact(body) {
        this.client = this.refresh();
        this.client.connect()

        try {
            const result = await this.client.db("Cluster0").collection("contacts").findOneAndUpdate(
                { "_id" : mongoose.ObjectId(body["id"]) },
                { $set :  body }
            );
            this.client.close()
            return result;
        } catch (e) {
            console.error("Could not update user: " + e);
            this.client.close()
            return 500;
        }
    }

    async deleteContact(body) {
        this.client = this.refresh();
        this.client.connect()
        try {
            const result = await this.client.db("Cluster0").collection("contacts").findOneAndDelete(
                { "_id" : mongoose.ObjectId(body["id"]) }
            );
            this.client.close()
            return result;
        } catch (e) {
            console.error("Could not delete user: " + e);
            this.client.close()
            return 500;
        }
    }

    refresh() {
        return new mongoose.MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    }
}

module.exports =  DB ;