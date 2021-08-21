const express = require('express');
const app = express();
const port = 1418;
const bodyParser = require('body-parser');

// Express Specific Stuff

app.use('/static' , express.static('static'));
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Import routes
require('./route')(app);

// Setting up views directory
app.set('view engine' , 'ejs');

// Starting the server

app.listen(port, (req, res)=>{
    console.log(`Yeah! Server started at port ${port}`);
})