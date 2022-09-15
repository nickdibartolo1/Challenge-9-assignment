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
  app.post('/api/notes', function(req, res) {
    const userNotes = req.body;

    fs.readFile('./db/db.json', (err, data) => {
      noteData = JSON.parse(data);
      noteData.push(userNotes);
      let num = 1;
      noteData.forEach((note, index) => {
        note.id = num;
        num++;
        return noteData;
      });
      console.log(noteData);

      stringData = JSON.stringify(noteData);

      fs.writeFile('./db/db.json', stringData, (err, data) => {
        if (err) throw err;
      });
    });
    res.send('Successfully created note! ');
  });
});

  console.log(app)

  module.exports = app;