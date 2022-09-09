const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
// user router
const uRouter = require("./")

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));
app.use('/api', uRouter);


app.get('/', (req, res)=> 
res.sendFile(path.join(__dirname, './public/index.html'))
);

// GET route for notes page
app.get('/notes', (req,res) => 
res.sendFile(path.join(__dirname, './public/notes.html'))
);


// Reroute to home if route does not exist
app.get('*', (req,res) =>
res.sendFile(path.join(__dirname, './public/index.html'))
);




app.listen(PORT, () => 
    console.log(`PORT: ${PORT} is being listened to by the server`)
  );