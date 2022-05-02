const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const swaggerui = require("swagger-ui-express");
const YAMLloader = require("yamljs");
const swaggerDocument = YAMLloader.load("./lms.yaml");

app.use(bodyParser.json());
//const time = new Date();
app.get("/", (req, res) => {
  res.send(`
    visit <a href="/api-docs/">api docs<a/>
  `);
});

app.use("/books", require("./routers"));

app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerDocument));
module.exports = app;
