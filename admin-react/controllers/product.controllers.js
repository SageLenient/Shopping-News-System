const mongoose=require('mongoose');

var Product= require('../models/product.model');

exports.create=function(req,res,next){
    const product=new Product(req.body);
    product.save().then((data)=>res.json(data));
}
exports.getById=function(req,res,next){
    var id=req.params.id;
    Product.find({id:+id}).then(data=>{
        res.json(data)
    })
}
exports.list = function(req,res,next){
    /* var page  = req.body.page ? req.body.page : 1;
    var limit = req.body.limit ? req.body.limit : 5;
    Product.paginate({}, { page: +page, limit: +limit }, function(err, result) {
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
        result.rows=result.docs;
        delete result.docs;
        sortBy(result.rows,"id",false);
        res.json(result);
    }); */
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
    Product.find().then(data=>{
        sortBy(data,"id",false);
        res.json(data)
    })//不分页写法
}