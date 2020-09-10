const express = require('express');
const path = require('path');

const app = express();
PORT = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, ('/public'))));
app.get('/', (req, res) => res.sendFile(path.join(__dirname + ('/public/index.html'))));
app.listen(PORT);