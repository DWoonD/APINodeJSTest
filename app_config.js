var express = require('express');
var bodyParser = require('body-parser');

var app = module.exports = express();

var AllowCors = (req, res, next) => {
    res.header('Acces-Control-Allow-Origin', '127.0.0.1:5000');
    res.header('Acces-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Acces-Control-Allow-Headers', 'Content-Type');
    res.header('Acces-Control-Allow-Credentials', 'true');
    
    next();
}

app.listen(5000);
app.use(bodyParser.json());
app.use(AllowCors);
app.use(bodyParser.urlencoded({
    extended: true
}));