var EmployeeDB = require('../Models/EmployeeDB');
var stripe = require('stripe')('sk_test_cPstwY5sImicmlLcBrzv7RxW');

var CreateNewEmployee = (req, res) => {
    console.log('CreateEmployee');
    bcrypt.hash(req.body.Password, 9, (err, hash) => {
        if (err) {
            res.json({
                status: 400,
                message: "password unable to bcrypt"
            })
        }
        let user = {
            Name: req.body.Name,
            Address: req.body.Address,
            DateOfJoing: req.body.DateOfJoing,
            Password: hash,
            Email: req.body.Email
        };

        if (user.Name && user.Address && user.DateOfJoing && user.Password && user.Email) {
            console.log('CreateEmployee111111');
            EmployeeDB.create(user, (err, record) => {
                if (err) {
                    res.json({
                        status: 400,
                        message: "This Email Address Already register with us"
                    })
                }
                if (record) {
                    res.json({
                        Status: 200,
                        messsage: " Employee Register sucessfully",
                        data: record
                    })
                } else {
                    res.json({
                        Status: 400,
                        message: 'please enter correcct email',
                        data: record
                    })
                }
            })
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'javedkhan199501@gmail.com',
                    pass: 'arshwrarshi'
                }
            });
            var mailOptions = {
                from: 'javedkhan199501@gmail.com',
                to: 'javedkhan19950@gmail.com',
                subject: 'Sending Email using Node.js',
                html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=320, initial-scale=1" />
  <title>Cleave Welcome</title>
  <style type="text/css" media="screen">

    /* ----- Client Fixes ----- */

    /* Force Outlook to provide a "view in browser" message */
    #outlook a {
      padding: 0;
    }

    /* Force Hotmail to display emails at full width */
    .ReadMsgBody {
      width: 100%;
    }

    .ExternalClass {
      width: 100%;
    }

    /* Force Hotmail to display normal line spacing */
    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
      line-height: 100%;
    }


     /* Prevent WebKit and Windows mobile changing default text sizes */
    body, table, td, p, a, li, blockquote {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    /* Remove spacing between tables in Outlook 2007 and up */
    table, td {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    /* Allow smoother rendering of resized image in Internet Explorer */
    img {
      -ms-interpolation-mode: bicubic;
    }

     /* ----- Reset ----- */

    html,
    body,
    .body-wrap,
    .body-wrap-cell {
      margin: 0;
      padding: 0;
      background: #ffffff;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 16px;
      color: #89898D;
      text-align: left;
    }

    img {
      border: 0;
      line-height: 100%;
      outline: none;
      text-decoration: none;
    }

    table {
      border-collapse: collapse !important;
    }

    td, th {
      text-align: left;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 16px;
      color: #89898D;
      line-height:1.5em;
    }

    /* ----- General ----- */

    h1, h2 {
      line-height: 1.1;
      text-align: right;
    }

    h1 {
      margin-top: 0;
      margin-bottom: 10px;
      font-size: 24px;
    }

    h2 {
      margin-top: 0;
      margin-bottom: 60px;
      font-weight: normal;
      font-size: 17px;
    }

    .outer-padding {
      padding: 50px 0;
    }

    .col-1 {
      border-right: 1px solid #D9DADA;
      width: 180px;
    }

    td.hide-for-desktop-text {
      font-size: 0;
      height: 0;
      display: none;
      color: #ffffff;
    }

    img.hide-for-desktop-image {
      font-size: 0 !important;
      line-height: 0 !important;
      width: 0 !important;
      height: 0 !important;
      display: none !important;
    }

    .body-cell {
      background-color: #ffffff;
      padding-top: 60px;
      vertical-align: top;
    }

    .body-cell-left-pad {
      padding-left: 30px;
      padding-right: 14px;
    }

    /* ----- Modules ----- */

    .brand td {
      padding-top: 25px;
    }

    .brand a {
      font-size: 16px;
      line-height: 59px;
      font-weight: bold;
    }

    .data-table th,
    .data-table td {
      width: 350px;
      padding-top: 5px;
      padding-bottom: 5px;
      padding-left: 5px;
    }

    .data-table th {
      background-color: #f9f9f9;
      color: #f8931e;
    }

    .data-table td {
      padding-bottom: 30px;
    }

    .data-table .data-table-amount {
      font-weight: bold;
      font-size: 20px;
    }


  </style>

  <style type="text/css" media="only screen and (max-width: 650px)">
    @media only screen and (max-width: 650px) {
      table[class*="w320"] {
        width: 320px !important;
      }

      td[class*="col-1"] {
        border: none;
      }

      td[class*="hide-for-mobile"] {
        font-size: 0 !important; line-height: 0 !important; width: 0 !important;
        height: 0 !important; display: none !important;
      }

      img[class*="hide-for-desktop-image"]{
        width: 176px !important;
        height: 135px !important;
        display:block !important;
        padding-left: 60px;
      }

      td[class*="hide-for-desktop-image"] {
        width: 100% !important;
        display: block !important;
        text-align: right !important;
      }

      td[class*="hide-for-desktop-text"] {
        display: block !important;
        text-align: center !important;
        font-size: 16px !important;
        height: 61px !important;
        padding-top: 30px !important;
        padding-bottom: 20px !important;
        color: #89898D !important;
      }

      td[class*="mobile-padding"] {
        padding-top: 15px;
      }

      td[class*="outer-padding"] {
        padding: 0 !important;
      }

      td[class*="body-cell-left-pad"] {
        padding-left: 20px;
        padding-right: 20px;
      }
    }

  </style>
</head>

<body class="body" style="padding:0; margin:0; display:block; background:#ffffff; -webkit-text-size-adjust:none" bgcolor="#ffffff">
<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
<tr>
  <td class="outer-padding" valign="top" align="left">
  <center>
    <table class="w320" cellspacing="0" cellpadding="0" width="600">
      <tr>

        <td class="col-1 hide-for-mobile">

          <table cellspacing="0" cellpadding="0" width="100%">
            <tr>
              <td class="hide-for-mobile" style="padding:30px 0 10px 0;">
                <img width="40" height="31" src="https://www.filepicker.io/api/file/GNoaqKTQX6VXtdvaywb1" alt="logo" />
              </td>
            </tr>

            <tr>
              <td class="hide-for-mobile"  height="150" valign="top" >
                <b>
                  <span>Awesome Co</span>
                  </b>
                <br>
                <span>1337 Swuby Lane Victoria, BC A1B 2C3</span>
              </td>
            </tr>

            <tr>
              <td class="hide-for-mobile" style="height:180px; width:299px;">
                <img width="180" height="299"src="https://www.filepicker.io/api/file/3UaTJxcRScNj3PEVofl4" alt="large logo" />
              </td>
            </tr>
          </table>
        </td>

        <td valign="top" class="col-2">
          <table cellspacing="0" cellpadding="0" width="100%">
            <tr>
              <td class="body-cell body-cell-left-pad">
                <table cellspacing="0" cellpadding="0" width="100%">
                  <tr>
                    <td>


                      <table cellspacing="0" cellpadding="10" width="100%">
                        <tr>
                          <td class="mobile-padding">
                          <h2>Hi you are login from  javedkhan19950@gmail.com.</h2>
                          </td>
                          <td class="mobile-padding" style="text-align:right ;">
                            05/10/2014
                          </td>
                        </tr>
                      </table>

                      <table cellspacing="0" cellpadding="10" width="100%">
                        <tr>
                          <td>
                            <b>Welcome to Awesome Co!</b><br>
                            We're really excited for you to join our community! You're just one click away from activate your account.
                          </td>
                        </tr>
                      </table>

                      <table cellspacing="0" cellpadding="10" width="100%">
                        <tr>
                          <td class="hide-for-mobile"  width="94" style="width:94px;">
                            &nbsp;
                          </td>
                          <td width="150" style="width:150px;">
                            <div style="text-align:center; background-color:#48be19;"><!--[if mso]>
                                  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="#" style="height:35px;v-text-anchor:middle;width:150px;" arcsize="8%" stroke="f" fillcolor="#48be19">
                                    <w:anchorlock/>
                                    <center style="color:#ffffff;font-family:sans-serif;font-size:16px;">Activate Now!</center>
                                  </v:roundrect>
                                <![endif]-->
                                <!--[if !mso]><!-- --><a href="#"><table cellspacing="0" cellpadding="0" width="100%" style="width:100%"><tr><td style="background-color:#48be19;border-radius:5px;color:#ffffff;display:inline-block;font-family:sans-serif;font-size:16px;line-height:45px;text-align:center;text-decoration:none;width:150px;-webkit-text-size-adjust:none;mso-hide:all;"><span style="color:#ffffff">Activate Now!</span></td></tr></table></a>
                                <!--<![endif]-->
                              </div>
                          </td>
                          <td class="hide-for-mobile"  width="94" style="width:94px;">
                            &nbsp;
                          </td>
                        </tr>
                      </table>

                      <table cellspacing="0" cellpadding="0" width="100%">
                        <tr>
                          <td style="text-align:center;padding-top:30px;">
                            <img src="https://www.filepicker.io/api/file/F7k2y1vcTu2AVmcPTkPJ" alt="signature" />
                          </td>
                        </tr>
                      </table>

                      <table cellspacing="0" cellpadding="0" width="100%">
                        <tr>
                          <td class="hide-for-desktop-text">
                            <b>
                              <span>Awesome Co</span>
                            </b>
                            <br>
                            <span>1337 Swuby Lane<br>Victoria, BC A1B 2C3</span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </center>
  </td>
</tr>
</table>
</body>
</html>`
            };
            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            })
        } else {
            console.log(Constants.RequiredField);
          res.json({ message : "please enter the require field" })
        }
    })
}
var getAllUser = (req,res) => {
  EmployeeDB.find({},(err,result) => {
if(err) {
  res.json({
    meassage : "please enter the valid eamil"
  })
}
if(result){
  res.json({
    meassage : "all data receive sucessfully ",
    result : result
  })
}

  })
}

var GetEmployee  =  (req, res) => {
    EmployeeDB.find().sort({
        Name: 1
    }).exec(function(err, data) {
        if (err) {
            res.json({
                message: "error" + err
            })
        }
        if (data)
            res.json({
                status: 200,
                result: data
            })
    });
}
var GetEmployeeByDate = (req, res) => {
    var uses = {
        DateOfJoing: req.body.DateOfJoing
    };
    EmployeeDB.find(uses, (err, rcd) => {
        if (err) {
            res.json({
                Status: 400,
                message: "Please enter valid date" + err
            })
        }
        if (rcd) {
            res.json({
                message: "User record sucessfully",
                data: rcd,
                status: 200
            })
        }
        if (!rcd) {
            res.json({
                messaage: "Please enter valid date ",
                //data : rcd,
                status: 400
            })
        }
    });
}
var OtpToMobile =  (req,res) => {
     let MobObj ={
           PhoneNumber : req.body.PhoneNumber,
           Email : req.body.Email
       }
    EmployeeDB.findOne( { Email : MobObj.Email }, {}, function(err, user){
      if(user){
           let OTP = Math.floor((Math.random() * 100000) + 1);
           const accountSid = 'AC26b80d4aaacc7a0c2a40319852e5663d';
           const authToken  = '70b8210cf5034211e1806ad2744932e1';
            // require the Twilio module and create a REST client
           const client = require('twilio')(accountSid, authToken);
           client.messages.create(
             {
               to: '+91'+MobObj.PhoneNumber,
               from: '+12568297885',
               body: 'Hi YOur OTP is'+ OTP
             },
      (err, message) => {
      if(err) res.json({ message : "Unable to  send", error : err});
      if(message){
        console.log('OTP',OTP);
                    EmployeeDB.update({ Email : MobObj.Email}, {"$set": { "OtpMobile" : OTP }},
                    function(err, updateuser){
                    if(updateuser){
                      res.json({status : 200,message : "Otp send sucessfully on your mobile number", user : updateuser})
                    }
                  })
      }
      else{res.json({message : "password"})}
    });
    }
  })
}
var Login  =  (req, res) => {
    let emailObje = {
        Email: req.body.Email
    }
    EmployeeDB.findOne(emailObje, (err, record) => {
        if (err) {
            res.json({
                message: "enter valid email"
            })
        }
        if (record) {
            bcrypt.compare(req.body.Password, record.Password, (err, data) => {
                if (err) {
                    res.json({
                        message: " error due to wrong password",
                        Status: 400
                    })
                }
                if (data) {
                  var token = jwt.sign({id:EmployeeDB._id},"name",{expiresIn:86400});
                  return res.json({auth : true,
                  token : token })
                }
                    // res.json({
                    //     message: "you are login sucessfully",
                    //     data: data,
                    //     Status: 200
                    // })
                    //   } else {
                     else {
                      res.json({
                        message: "please enter the correct password "
                      })
                    }
            })
        } else {
            res.json({
                message: "please enter the correct email and  password"
            })
        }
    })
}
var userid =  function(req, res) {
    var token = req.headers['token'];
    jwt.verify(token, "name", function(err, decoded) {
      if (err) return res.json(err);
      return res.json(decoded);
    });
}
function generate4DigitOTP(){
  let OTP = Math.floor((Math.random() * 100000) + 1);
  return OTP;
}

var isUserExist = function(req, res){
  let status = isUserExist(req.body.userId);
  res.send({status  : status});
}

var stripePayment = function(req, res){
     var StripObj = {
           email : req.body.email,
           amount : req.body.amount,
           currency  : req.body.currency,
           source :  req.body.source,
           description : req.body.description
        }
     stripe.customers.create({email: req.body.email}).then(function(customer){
        return stripe.customers.createSource(customer.id, {
          source: 'tok_visa'
        });
      }).then(function(source) {
        return stripe.charges.create({
          amount: StripObj.amount,
          currency: StripObj.currency,
          customer: source.customer
        });
      }).then(function(charge) {
        if(charge.status == "succeeded"){
        res.json({message : "payment successsed Sucessfully ",status : 200})
         }
        else  {
         res.json({message : "payment not  successsed Sucessfully ",status : 400})
       // New charge created on a new customer
    }
      console.log('charges',charge);
        }).catch(function(err) {
         res.json({message : "OOPS there are some error during payment",status :400})
        // Deal with an error
      });

  }

function isUserExist(id){
  if(id){
    User.find({ _id : userid }, {}).exec(function(err, data){
      if(err){
        return false;
      }
      if(data){
        return true;
      }
      else{
        return false;
      }
    })
  }
  else{
    return false;
  }
}
var ResetPassword =  (req, res) => {

  let PassObj1 = {
      Email: req.body.Email
  }
  EmployeeDB.findOne(PassObj1, (err, record) => {
if(err){
  res.json({message : "enter email"})
       }
      if(record){
        if(PassObj1.Email == record.Email) {
         bcrypt.hash(req.body.Password, 9, (err, hash) => {
            if(err) {
                res.json({
                    message: "Wrong Password and confirm password",
                    Status: 400
                })
            }
            if (hash) {
                let PassObj2 = {
                    Password: hash,
                    ConfirmPassword: req.body.ConfirmPassword
                }
                if (req.body.Password == PassObj2.ConfirmPassword) {
                    EmployeeDB.update(PassObj1, PassObj2, (err, data) => {
                        if (err) {
                            res.json({
                                message: "Wrong Password and confirm password",
                                Status: 400
                            })
                        }
                        if (data) {
                            res.json({
                                message: "password reset sucessfully",
                                data: data,
                                Status: 200
                            })
                        }
                    })
                } else {
                    res.json({
                        message: "Password and confirm Password not matched"
                    })
                }
            }
        })

        }
        else {
           res.json({
               message: "email is not correct"
           })
       }
      }
      else {
         res.json({
             message: "email is not correct"
         })
     }
    })
    }
var forgetPassword  =   function(req, res) {
        let EmailObj2 = {
            Email: req.body.Email
        }
        EmployeeDB.findOne(EmailObj2, (err, data) => {
            if (err) {
                res.json({
                    message: "please enter the valid email id",
                    status: 400
                })
            }
            if (data) {
                res.json({
                    message: "link send sucessfully on your mail are plz check",
                    Status: 200
                })
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'javedkhan199501@gmail.com',
                        pass: 'arshwrarshi'
                    }
                });
                var mailOptions = {
                    from: 'javedkhan199501@gmail.com',
                    to: 'javedkhan19950@gmail.com',
                    subject: 'Sending Email using Node.js',
                    text: 'this is the link for reset the password'
                };
                transporter.sendMail(mailOptions, function(error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                })
            } else {
                res.json({
                    message: "plz enter valid email"
                })
            }
        })
    }
    var UploadEmployeeImageById= (req, res) => {
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
        EmployeeDB.find(userFile, (req, res))
    }
    var UpatedEmployeeBYEmail  =  (req, res) => {
            let empObj = {
                Email: req.body.Email
            }
            EmpObj1 = {
                Name: req.body.Name,
                Address: req.body.Address,
                DateOfJoing: req.body.DateOfJoing,
                Password: req.body.password
            };
            EmployeeDB.update(empObj, EmpObj1, function(err, data) {
                if (err) {
                    res.json({
                        message: "please enter the valid email id",
                        status: 400
                    })
                }
                if (data) {
                    res.json({
                        message: "you have updated data sucessfully",
                        data: data,
                        satatus: 200

                    })
                }
            })
        }
        var EmailVerified = (req, res) => {
            let EmObj = {
                Email: req.body.Email
            }
            if (EmObj.Email) {
                EmployeeDB.update(EmObj, {
                    IsEmailVerified: false
                }, (err, data) => {
                    if (err) {
                        return res.json({
                            status: 400,
                            message: 'Email id not Correct'
                        })
                    }
                    if (data) {
                        return res.json({
                            status: 200,
                            message: 'Emp Email id  update sucessfully',
                            data: data
                        })
                    }
                })
            } else {
                res.json({
                    message: "please entered correct email"
                })
            }
        }
        var getAllUser = (req,res) => {
          EmployeeDB.find({},(err,result) => {
        if(err) {
          res.json({
            meassage : "please enter the valid eamil"
          })
        }
        if(result){
          res.json({
            meassage : "all data receive sucessfully ",
            result : result
          })
        }

          })
        }


exports.stripePayment = stripePayment;
exports.OtpToMobile = OtpToMobile;
exports.Login = Login;
exports.ResetPassword =ResetPassword;
exports.forgetPassword = forgetPassword;
exports.UpatedEmployeeBYEmail = UpatedEmployeeBYEmail;
exports.EmailVerified = EmailVerified;
exports.UploadEmployeeImageById = UploadEmployeeImageById;
exports.getAllUser = getAllUser;
exports.GetEmployeeByDate = GetEmployeeByDate;
exports.GetEmployee = GetEmployee;
exports.getAllUser = getAllUser;
exports.CreateNewEmployee = CreateNewEmployee;
