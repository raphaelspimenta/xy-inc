const express = require('express');
const validate = require('express-validator');
const bodyParser = require('body-parser');
var db = require('./db');
var routes = require('./routes/api');
const app = express();

// Bodyparser config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

// Handling error
app.use(function(err, req, res, next){
    res.status(422).send({
        error: err.message
    })
});

// Routes
app.use('/api', routes);

module.exports = app;