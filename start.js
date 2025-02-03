const  express=require("express");

const app=express();

app.listen(5000,(err)=>{
console.log("Running on port 5000");
});

//get health check get status
app.get("/health",(req,res)=>{
    res.json({status:"OK",message:"Health is OK"});
});
//get health check get status
app.get("/getCustmerbyMobileNumber",(req,res)=>{
    const {mobilenumber}=req.body;
    res.json({status:"OK",message:"Health is OK"});
});