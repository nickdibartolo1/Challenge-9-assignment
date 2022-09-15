const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000;
// user router
// const uRouter = require("./assets/index")

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));
// app.use('/api', uRouter);

require('./routes/mainRoute');
require('./routes/notes');

app.listen(PORT, () => 
    console.log(`PORT: ${PORT} is being listened to by the server`)
  );

  console.log(app);