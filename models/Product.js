const mongoose=require("../config/db")
var ProductSchema=mongoose.Schema({
    name: String,
    description:String,
    price: Number,
    quantity: Number,
    totalPrice:Number
});

var Product=mongoose.model('Product',ProductSchema,'products')
module.exports=Product;