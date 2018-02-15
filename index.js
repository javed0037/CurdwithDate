var mongoose = require('mongoose');
var express = require('express');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');
var twilio = require('twilio');
var path = require('path');
var multer = require('multer');
var USERS = require('./routes/user');
var STUD = require('./routes/Studentpath');
var queryHandler = require('express-api-queryhandler');
var app = express();
app.use(queryHandler.fields());
app.use(queryHandler.filter());
app.use(queryHandler.pagination({
    limit: 25
}));
app.use(queryHandler.sort());
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
const EmployeeDB = require('./Models/EmployeeDB');
mongoose.connect('mongodb://localhost/EmployeeDB');
const Student = require('./Models/Student');
mongoose.connect('mongodb://localhost/Student');

app.use('/user', USERS);
app.use('/stud',STUD);
//For message sending on Mobile


app.listen(3000, (req, res) => {
    console.log("app is running on port 3000");
});
