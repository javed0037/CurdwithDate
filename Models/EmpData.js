var mongoose = require('mongoose');
let EmpData =  new mongoose.Schema;
EmpData = {
    Name : {
          type : String
        },
    Address : {
          type : String
      },
    DateOfJoing : {
          type : Date,
          required : true
      },
      Password : {
        type : String
      },
      Email : {
        type : String ,
        unique : true
      },
      ImageUpload : {
        type : String
      },
      IsEmailVerified : {
          type : Boolean,
          default :false
      },
    isDeleted : {
          type : Boolean,
          default : false
    }
};
module.exports = mongoose.model('employeedata',EmpData);
