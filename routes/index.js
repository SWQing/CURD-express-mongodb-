var express = require('express');
var router = express.Router();
//引入数据库连接文件
var db = require('../model/db');
//引入我们的模型
var student = require('../model/Student');

/* GET home page. */
router.get('/', function(req, res, next) {
  var newStudent = new student({
    name:'lzy',
    age:30,
    gender:'男',
    tel:15226161302
  });
  newStudent.save();
  res.render('index', { title: 'Express' });
});
//把我新增的东西显示出来。
router.get('/list',function(req,res){
  student.find().then(function(data){
    var str = JSON.stringify(data);
    res.send(str);
  })
})
router.get('/remove',function(req,res){
  student.remove().then(function(){
    res.send('删除成功,请访问/list页面查询数据');
  })
})
router.get('/update',function(req,res){
  student.update({name:'lzy'},{$set:{name:'hanmeimei'}},{ multi: true }).then(function(){
    res.send('所有的名字已经修改完毕了');
  })
})

module.exports = router;
