var express       = require('express');
var app           = express();
var bodyParser    = require('body-parser');


app.use( bodyParser.json() );    

// require app routes
var projects      = require('./v1/app/projects');

// setup routes
app.use('/api/v1/projects', projects);


app.listen(3000);
