const express = require('express');
const app = express();
const fs = require('fs')

app.get('', function(req, res) {
    fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;
      dbData = JSON.parse(data);
      res.send(dbData);
    });
  });

  module.exports = app;