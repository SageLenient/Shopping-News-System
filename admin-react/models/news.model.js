const mongoose = require('mongoose');
const mongoosePaginate= require('mongoose-paginate');

var schema=new mongoose.Schema({
    id:Number,
    img:String,
    title: String,
    content:String
});
schema.plugin(mongoosePaginate);
module.exports=mongoose.model('News',schema);