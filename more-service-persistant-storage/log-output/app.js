const crypto = require("crypto");
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const randomString = crypto.randomUUID();

const logFilePath = path.join("/usr/src/app/files", "log.txt");

app.get("/log-out", (_, res) => {
  fs.readFile(logFilePath, "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading log file");
      return;
    }
    const line = data.trim();
    const timestamp = new Date().toISOString();
    res.send(`${timestamp}:${randomString}.\nPing / Pongs: ${line}`);
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
