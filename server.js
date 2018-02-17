var express = require('express'),
app = express(),
port = process.env.PORT || 3000;
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', require('./api/routes/routes'))

app.listen(port);

console.log('RESTful API server started on: ' + port);