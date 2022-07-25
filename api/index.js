const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

const port = process.env.PORT || 3000;

const welcome = require("./welcome.json");
const endpoints = require("./endpoints.json");

const { operate } = require("./utils.js");

app.get("/", (req, res) => {
  res.json(welcome);
});
app.get("/api/endpoints", (req, res) => {
  res.json(endpoints);
});

app.get("/api/:operation/:expression", (req, res) => {
  const { operation, expression } = req.params;
  res.send(operate(operation, expression));
});

app.listen(port, () => console.log(`🚀 Listening on port ${port}...`));
