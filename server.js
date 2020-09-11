var health = require('express-ping');
const express = require('express');
const path = require('path');

const app = express();
PORT = process.env.PORT || 8080
app.use(health.ping())
app.use(express.static(path.join(__dirname, ('/public'))));
app.get('/', (req, res) => res.sendFile(path.join(__dirname + ('/public/index.html'))));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname + ('/public/about.html'))));
app.get('/timeline', (req, res) => res.sendFile(path.join(__dirname + ('/public/feedback.html'))));
app.
app.listen(PORT);