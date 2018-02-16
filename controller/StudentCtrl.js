var Student = require('../Models/Student');
// function for Create new registration
 var RegisterNewStudet = (req,res) =>{
   var RequestObj = {
     Name : req.body.Name,
     RollNumber : req.body.RollNumber,
     Address :req.body.Address,
     Result : req.body.Result,
     City : req.body.City,
     DOB : req.body.DateOfBirth,
     RegistrationDate : req.body.RegistrationDate,
     Scholarship : req.body.Scholarship,
     Email : req.body.Email
   };
  if(RequestObj){
       Student.create(RequestObj,(err,data) =>{
          if(err){
              res.json({message : "Student Data not saved in DB",status : 200})
           }
          if(data){
               res.json({message : "Student Registration  has been Sucessfully",Data : data,status:200})
            }
          else{
             res.json({message : "Please enter the All information correct !",status : 400})
         }
     });
   }
   else {
           res.json({message : "Please enter the All information correct !",status : 400})
   }
 };
 var GetTotalScholarship = (re,res) => {
   var requestObj = {
  Email : req.body.Email
   }
   Student.findOne(requestObj,(err,data)=>{
     if(err){
       
     }
   })

 }

var GetTotalMarkByID  =  (req,res)=> {
  var ReqParam =  {
    _id : req.body.ID
  }
   if(ReqParam) {
      Student.findOne(ReqParam,(err,data) =>  {
        if(err){res.json({message : "Please enter the All information correct !",status : 400})}
        if(data){
              let totalMark = 0;
              let count = 0;
              for(let mark of data.Result){
                totalMark = totalMark + mark.Mark;
                count++;
                console.log('Total subjects:::',count);
                if(count === data.Result.length){
                  let percent= (totalMark *100) / (data.Result.length*100);
                 res.json({message : "Student all data find Sucessfully",data : percent,status:200})
                  console.log("thwrwdgdggs");
                }
                else {
                  // res.json({message : "Please enter the All information correct !" +err,status : 400})
                }
                // res.json({message : "Student all data find Sucessfully",data : totalMark,status:200})
              }

        }
        else {
          res.json({message : "Please enter the All information correct !",status : 400})
        }
      })
  }

  else {
    res.json({message : "Please enter the All information correct !",status : 400})
  }
}
exports.RegisterNewStudet = RegisterNewStudet;
exports.GetTotalMarkByID = GetTotalMarkByID;
