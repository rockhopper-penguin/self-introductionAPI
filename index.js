const express = require('express');
const app = express();

app.get('/', (req, res) =>
    res.send('Rockhopper-Penguin')
);

app.listen(3000);