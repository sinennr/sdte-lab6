const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("NCT127!");
});

module.exports = app;
