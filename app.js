
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var db = require('./src/db/mongoose');

var app = express();
var port = process.env.PORT || 80;
var share = require('./src/controllers/shareController'); 
var url = require('./src/controllers/urlGenerate');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/tellaboutme')));
app.use('/', express.static(path.join(__dirname, 'dist/tellaboutme')));






app.listen(port,()=>{
  console.log("Listening on localhost")
});

module.exports = app;
