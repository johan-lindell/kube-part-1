const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const logFilePath = path.join("/usr/src/app/files", "log.txt");

let iter = 0;

// Read the current number from log.txt when the server starts
if (fs.existsSync(logFilePath)) {
  const data = fs.readFileSync(logFilePath, "utf8");
  iter = parseInt(data, 10) || 0;
}

app.get("/ping-pong", (_, res) => {
  res.send(`pong ${iter}`);
  iter += 1;

  // Write the new number to log.txt
  fs.writeFileSync(logFilePath, iter.toString(), "utf8");
});

app.listen(3001, () => {
  console.log("Ping pong app started on port 3001");
});
