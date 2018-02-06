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
      ImageUpload : {
        type : String
      },
    isDeleted : {
          type : Boolean,
          Default : false
    }
};
module.exports = mongoose.model('employeedata',EmpData);
