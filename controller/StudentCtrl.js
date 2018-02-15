var Student = require('../Models/Student');
// function for Create new registration
 var RegisterNewStudet = (req,res) =>{
   var RequestObj = {
     Name : req.body.Name,
     RollNumber : req.body.RollNumber,
     Address :req.body.Address,
     SubjectName : req.body.SubjectName,
     Mark:  req.body.Mark,
     City : req.body.City,
     DOB : req.body.DateOfBirth,
     RegistrationDate : req.body.RegistrationDate
   };
  if(RequestObj.Name,RequestObj.RollNumber,RequestObj.Address,RequestObj.SubjectName,RequestObj.Mark,RequestObj.City,RequestObj.DateOfBirth,RequestObj.RegistrationDate){
       Student.create(RequestObj,(err,data) =>{
          if(err){
              res.json({message : "Student Data not saved in DB",status : 200})
           }
          if(data){
               res.json({message : "Student Registration  has been Sucessfully",Data : data,status:200})
            }
          else{
             res.json({message : "Please enter the All information correct !",status : 200})
         }
     });
   }
   else {
           res.json({message : "Please enter the All information correct !",status : 200})
   }
 }

exports.RegisterNewStudet = RegisterNewStudet;
