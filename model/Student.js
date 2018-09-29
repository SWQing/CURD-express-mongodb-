/**
 * Created by hama on 2017/9/7.
 */
//1.加载模块
var mongoose = require('mongoose');
//2.定义一些字段，在数据存储的时候使用的字段
var StudentSchema = mongoose.Schema({
    name:String,
    age:Number,
    gender:String,
    tel:Number
})
//3.创建一个模型出来，这个模型当中就有name,age,gender,tel这些字段了
var Student = mongoose.model('student',StudentSchema);
module.exports = Student


