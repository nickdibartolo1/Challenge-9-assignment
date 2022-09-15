const express = require('express');
const app = express();
const fs = require('fs')

app.get('', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
      if (err) throw err;
      dbData = JSON.parse(data);
      res.send(dbData);
    });
  });


app.post('', (req, res) => {

  
});



app.delete()



  console.log(app)

  module.exports = app;