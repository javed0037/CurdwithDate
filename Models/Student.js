var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var StudentSchema = new Schema ({
     Name : {
         type : String
          },
     RollNumber : {
         type : String
        },

     Address : {
         type : String
       },

     TotalMark : [{
         SubjectName : {
          type : String
          },

         Mark : {
           type : Number
          }
     }],

       City : {
         type : String
       },

       DOB : {
          type : Date
       },
       RegistrationDate : {
              type : Date
          }


})
module.exports = mongoose.model('Student', StudentSchema);
