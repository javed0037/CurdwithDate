var mongoose = require('mongoose');
let Schema =   mongoose.Schema;
var EmpSchema =  new Schema ({
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
      OtpMobile : {
        type : String,
        default : ''
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
});
module.exports = mongoose.model('employee', EmpSchema);
