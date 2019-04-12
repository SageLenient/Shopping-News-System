var express = require('express');
var router = express.Router();
var jwt=require('jsonwebtoken');
var dataCtrl=require('../controllers/news.controllers');


function verifyToken(req,res,next){
    const bearerHeader=req.headers['authorization'];
    //console.log(bearerHeader);

    if(typeof bearerHeader !== 'undefined'){
        const bearer =bearerHeader.split(" ");
        const bearerToken =bearer[1];
        //console.log(bearerToken);
        // verify 验证传入的Token
        // next() // 继续之后的操作
        jwt.verify(bearerToken,'westWorldSecret',(err,decoded)=>{
            if(decoded!=='undefined'){
                next();
            }else{
                res.sendStatus(403);
            }
            console.log(decoded);

        })
    }else{
        res.sendStatus(403);
    }
}
router.post('/login',dataCtrl.login);
module.exports = router;
