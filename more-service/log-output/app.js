const crypto = require("crypto");
const express = require("express");

const app = express();

const randomString = crypto.randomUUID();

app.get("/log-out", (_, res) => {
  res.send(randomString);
});

const logRandomString = () => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${randomString}`);
};

logRandomString();
setInterval(logRandomString, 5000);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
