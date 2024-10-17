const express = require("express");

const app = express();

let iter = 0;
app.get("/ping-pong", (_, res) => {
  res.send(`pong ${iter}`);
  iter += 1;
});

app.listen(3000, () => {
  console.log("Ping pong app started on port 3000");
});
