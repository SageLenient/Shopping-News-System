const mongoose=require('mongoose');

var News= require('../models/news.model');
var jwt=require('jsonwebtoken');
exports.create=function(req,res,next){
    const news=new News(req.body);
    news.save().then((data)=>res.json(data));
}
exports.getById=function(req,res,next){
    var id=req.params.id;
    News.find({id:+id}).then(data=>{
        res.json(data)
    })
}
exports.list = function(req,res,next){
    /* var page  = req.body.page ? req.body.page : 1;
    var limit = req.body.limit ? req.body.limit : 10;
    News.paginate({}, { page: +page, limit: +limit }, function(err, result) {
        res.json(result);
    }); */
    News.find().then(data=>{
        function sortBy(arr,value, isAscend) {
            isAscend = isAscend || true;
            arr.sort(function (a, b) {
                if (isAscend) {
                    return a[value] - b[value]
                } else {
                    return b[value] - a[value]
                }
            });
        }
        sortBy(data,"id",false);
        res.json(data)
    })
}
//登录口令
exports.login=function(req,res,next){
    // 拿到一个口令，但是口令根据什么来的？
    // jwt 根据用户信息给出 token
    User.findOne(req.body,function(err,result){
        var user=JSON.parse(JSON.stringify(result));
        delete user.password;
        jwt.sign({result},'westWorldSecret',(err,token)=>{
            user.token=token;
            res.json(user);
        })
    });
    // postman 请求时，返回token 值
    /* jwt.sign({user},'westWorldSecret',(err,token)=>{
        res.json({token});
    }) */
}