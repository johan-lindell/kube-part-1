const fs = require("fs");
const path = require("path");

const logRandomString = () => {
  const timestamp = new Date().toISOString();
  const out = `${timestamp}\n`;
  const filePath = path.join("/usr/src/app/files", "log.txt");

  fs.appendFile(filePath, out, (err) => {
    if (err) {
      console.error("Error writing to file", err);
    }
  });
};

logRandomString();
setInterval(logRandomString, 5000);
