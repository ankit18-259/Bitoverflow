const express = require('express');
const path = require('path');

const app = express();
PORT = process.env.PORT || 8080;


app.use(express.static(path.join(__dirname, ('/public'))));
app.get('/', (req, res) => res.sendFile(path.join(__dirname + ('/public/index.html'))));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname + ('/public/about.html'))));
app.get('/timeline', (req, res) => res.sendFile(path.join(__dirname + ('/public/timeline.html'))));
app.get('/mentor_manual', (req, res) => res.sendFile(path.join(__dirname + ('/Data/Mentor_Manual.pdf'))));
app.listen(PORT);