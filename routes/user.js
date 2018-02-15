
var express = require('express');
var router = express.Router();
var user = require('../controller/userCtrl');

router.get('/getUsers', function(req, res){
  console.log('from router');

})
router.post('/OtpToMobile',user.OtpToMobile);
router.post('/Login', user.Login);
// router.get('/userid', user.userid);
// router.post('/isUserExist ',user.isUserExist);
router.post('/ResetPassword',user.ResetPassword);
router.post('/forgetPassword', user.forgetPassword);
router.post('/UpatedEmployeeBYEmail', user.UpatedEmployeeBYEmail);
router.post('/EmailVerified', user.EmailVerified);
router.post('/UploadEmployeeImageById', user.UploadEmployeeImageById);
router.post('/GetEmployeeByDate', user.GetEmployeeByDate);
router.get('/GetEmployee', user.GetEmployee);
router.get('/getAllUser',user.getAllUser);
router.post('/CreateNewEmployee', user.CreateNewEmployee);
router.post('/stripePayment', user.stripePayment);

module.exports = router;
