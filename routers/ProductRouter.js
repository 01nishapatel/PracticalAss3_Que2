const router=require("express").Router();
const Product=require("../models/Product")
router.post("/",(req,res)=>{
    let TotPrice=req.body.quantity * req.body.price;
    var product1=new Product({
        name: req.body.name ,
        description:req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        totalPrice:TotPrice
    })
    product1.save((err,product)=>{
        res.send(product)
        console.log(product)
    })
})
router.put("/:id",(req,res)=>{
    Product.findOneAndUpdate({"_id":req.params.id}, req.body, {new: true}, function (err, product) {
        if (err) return res.status(500).send("There was a problem updating.");
        res.status(200).send(product);
    });
})
router.delete("/:id",(req,res)=>{
    Product.findOneAndRemove({_id:req.params.id},(err,product)=>{
        console.log(product)
        res.send(product)
    })
})
router.get("/",(req,res)=>{
    Product.find((err,products)=>{
        console.log(products)
        res.send(products)
    })
})
router.get("/:id",(req,res)=>{
    Product.findById({_id: req.params.id},(err,product)=>{
        console.log(product)
        res.send(product)
    })
})
module.exports=router;