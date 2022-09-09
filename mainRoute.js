const path = require('path');


// exporting servers to each specified get req through app parameter in function
module.exports = function(app) {


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
}