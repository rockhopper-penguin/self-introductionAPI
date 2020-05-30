const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const selfIntoroduction = [{
        name: "Rockhopper-Penguin",
        country: "Japan"
    }]
    res.json(selfIntoroduction);
});

app.listen(3000, () => console.log("app running!"));