var express = require('express');
var router = express.Router();
var stud = require('../controller/StudentCtrl');
router.get('/getStudent',function(req,res){
  console.log('this is Student route');
})

router.post('/RegisterNewStudet', stud.RegisterNewStudet);
router.post('/GetTotalMarkByID', stud.GetTotalMarkByID);
module.exports = router;
