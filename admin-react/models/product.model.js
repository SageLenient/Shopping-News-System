const mongoose = require('mongoose');
const mongoosePaginate= require('mongoose-paginate');

var schema=new mongoose.Schema({
    id:Number,
    img: String,
    title:String,
    content:String,
    price:{}
});
schema.plugin(mongoosePaginate);


module.exports=mongoose.model('product',schema,'product');//如果不写第三个参数，则默认生成复数形式