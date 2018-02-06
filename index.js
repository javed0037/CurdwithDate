var mongoose = require('mongoose');
var express = require('express');
var bcrypt = require('bcrypt');
var path = require('path');
var multer = require('multer');
var queryHandler = require('express-api-queryhandler');
var app = express();
app.use(queryHandler.fields());
app.use(queryHandler.filter());
app.use(queryHandler.pagination({limit: 25}));
app.use(queryHandler.sort());
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended:false
}));
app.use(bodyParser.json());
const EmpData = require('./Models/EmpData');
mongoose.connect('mongodb://localhost/EmployeeData');
// app.post('/GetEmployeeBetweenDate' ,(req , res) =>{
//
//   var minDate = Date();
//   var maxDate = Date();
//   var dats = {
//
//       DateOfJoing : req.body.DateOfJoing
//     };
//     var MinDate =  new Date(2012, 04, 20, 14, 55, 59);
//
//     EmpData.find({} , (err, callback) =>{
//       if(err)
//       return res.json("")
//     }
//     )
// }

app.post('/UploadEmployeeImageById',(req,res) => {
              var storage = multer.diskStorage({
	            destination: function(req, file, callback) {
      		          callback(null, './uploads')
      	        },
      	          filename: function(req, file, callback) {
      		          console.log(file)
      		          callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
      	          }
              })

              var upload = multer({
            		storage: storage
            	}).single('userFile')
            	upload(req, res, function(err) {
            		res.end('File is uploaded')
            	})


})
app.post('/GetEmployeeByDate',(req,res) =>{
  var uses = {
    DateOfJoing : req.body.DateOfJoing
  };
  EmpData.find(uses,(err,rcd)=>{
    if(err) {
      res.json({
        Status : 400,
        message : "Please enter valid date" +err
      })
    }

    if(rcd){
      res.json({
        message : "User record sucessfully",
        data : rcd,
        status : 200
      })
    }
      if(!rcd){
        res.json({
          messaage : "Please enter valid date ",
          //data : rcd,
          status :400
        })

    }
  });
});
 app.get('/GetEmployee',(req, res) => {

     EmpData.find().sort({ Name: 1 }).exec(function(err,data){
       if(err){

         res.json({
           message : "error"+err
         })
       }
       if(data)
       res.json({
         status : 200,
         result : data
       })
     });
   });

app.post('/CreateEmployee',(req,res)=>{
  console.log('CreateEmployee');
bcrypt.hash(req.body.Password , 9 ,(err,hash)=>{
    if(err) {
      res.json({
    status : 400,
    message : "password not bcrypt"
  })
}
  let user = {
       Name : req.body.Name,
       Address : req.body.Address,
       DateOfJoing : req.body.DateOfJoing,
       Password : hash
  };

      if(user.Name && user.Address && user.DateOfJoing &&  user.Password){
          console.log('CreateEmployee111111');
          EmpData.create(user,(err,record) => {
            if(err){
                res.json({
                status : 400,
                message : "Enter right info"
            })
        }
            if(record){
                res.json({
                Status : 200 ,
                messsage : " Created api sucessfully",
                record : record
              })
          }
        })
    }
})
})

app.listen(3000 , (req,res)=>{
  console.log("app is running on port 3000");
});
