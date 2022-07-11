const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const app = express();
app.use(serveStatic(__dirname + "/qinying/dist"));
// app.use(express.static(__dirname + "/dist/"));
// app.get(/.*/, function (req, res) {
//   res.sendfile(__dirname + "./dist/index.html");
// });
const port = process.env.PORT || 8080;
app.listen(port);
console.log("Server started...");
