const e = require("express")
const express=require("express")
const app=express()
const cors=require("cors")
const helmet=require("helmet")
const morgan=require("morgan")
require("dotenv").config()

const {sign,verify}=require("./libs/jwt")
const ProductRouter=require("./routers/ProductRouter")


app.use(express.urlencoded({extended: true}))
app.use(morgan('combined'))
app.use(helmet())
app.use(cors())
app.use(express.json())
 app.get("/gettoken",sign)
 app.use("/products",ProductRouter);



app.listen(3700,(err)=>{
if(!err){
    console.log("listeing..");
}
else
{
    console.log(err);
}
})
