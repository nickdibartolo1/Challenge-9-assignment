const path = require('path');
const express = require('express');
const app = express();
const notesRouter = require('./notes');


app.use('/notes', notesRouter);


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;

  console.log(app)