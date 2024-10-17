const crypto = require("crypto");
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const randomString = crypto.randomUUID();
const logFilePath = path.join("/usr/src/app/files", "log.txt");

app.get("/", (_, res) => {
  fs.readFile(logFilePath, "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading log file");
      return;
    }
    const lines = data.trim().split("\n");
    const lastLine = lines[lines.length - 1];
    res.send(`${lastLine}:${randomString}`);
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
