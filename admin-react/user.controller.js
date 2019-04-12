const mongoose = require('mongoose');
var User = require('../models/user.model');

  exports.create = function(req, res, next) {
    const user = new User(req.body);
    user.save().then((data) => res.json(data));
  }

  exports.update = function(req,res,next){
    const id = req.params.id;

    User.findByIdAndUpdate(id,{$set: req.body},{new:false}).then(data=>{
      res.json(data);
    })
  }

  exports.remove = function(req,res,next){
    const id = req.params.id;
    User.findByIdAndDelete(id,(err,data)=>{
      res.json(data);
    })
  }

  exports.list = function(req,res,next){
    var page  = req.body.page ? req.body.page : 1;
    var limit = req.body.limit ? req.body.limit : 2;

    User.paginate({}, { page: +page, limit: +limit }, function(err, result) {
     res.json(result);
    });
  }

  exports.get = function(req,res,next){
    const id = req.params.id;
    User.findById(id).then(data=>{
      res.json(data);
    })
  }