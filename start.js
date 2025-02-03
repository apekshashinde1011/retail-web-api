const  express=require("express");

const app=express();

app.listen(5000,(err)=>{
console.log("Running on port 5000");
});

app.get("/health",(req,res)=>{
    res.json({status:"OK",message:"Health is OK"});
});