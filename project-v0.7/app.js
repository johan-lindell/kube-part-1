const express = require("express");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const cron = require("node-cron");

const app = express();
const port = 3000;
const imagePath = path.join("/usr/src/app/files", "image.jpg");

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

app.use('/files', express.static(path.join(__dirname, 'files')));

// Function to fetch and save the image
const fetchAndSaveImage = async () => {
  try {
    const response = await axios.get("https://picsum.photos/1200", {
      responseType: "arraybuffer",
    });
    fs.writeFileSync(imagePath, response.data);
    console.log("Image saved successfully");
  } catch (error) {
    console.error("Error fetching image:", error);
  }
};

// Schedule the task to run every hour
cron.schedule("0 * * * *", fetchAndSaveImage);

// Fetch an image immediately on startup
fetchAndSaveImage();

// Start the server and log the message
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});