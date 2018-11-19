const path = require("path");
const express = require("express");
const config = require("../webpack.prod.js");

const app = express();

app.use(express.static(config.output.path));

app.get("*", function(req, res) {
  res.sendFile(path.join(config.output.path, "index.html"));
});

// Serve the files on port 3000.

app.listen(3000, function() {
  console.log("Your Project listening on port 3000!\n");
});
