var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var StudentSchema = new Schema({
    Name: {
        type: String
    },
    Email: {
      type : String,
      require : true
    },
    RollNumber: {
        type: String
    },

    Address: {
        type: String
    },

    Result: [{
        SubjectName: {
            type: String
        },

        Mark: {
            type: Number
        }
    }],

    City: {
        type: String
    },

    DOB: {
        type: Date
    },
    RegistrationDate: {
        type: Date
    },
    Scholarship : [{
      CentralGovt : {
        type : Number
      },
      StateGovt : {
        type : Number
      }
    }]




})
module.exports = mongoose.model('Student', StudentSchema);
