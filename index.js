const express = require("express");
const fs = require("fs");
const ytdl = require("ytdl-core");
const downloadsFolder = require("downloads-folder");
var cors = require("cors");
const app = express();

app.use(cors({ credentials: true, origin: true }));
let PORT = process.env.PORT || 5000;
app.use("/pdf", express.static(__dirname + "/pathToPDF"));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
