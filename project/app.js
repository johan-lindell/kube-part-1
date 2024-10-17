const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('yoyo!');
});

app.get('/whatday', (req, res) => {
    const date = new Date();
    res.send(`Today is ${date.toDateString()}`);
});

// Start the server and log the message
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
