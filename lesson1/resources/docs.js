const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
        title: "My API",
        description: "Description", 
    },
    host: "localhost:3000",
    schemes: ["http"],
};

const outputFile = "./swagger-output.json";
const endpointFiles = ["../routes/contacts.js", "../routes/index.js"];

swaggerAutogen(outputFile, endpointFiles, doc);