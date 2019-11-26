var express=require("express");
var app=express();

app.get("/",(req,res)=>{
    console.log("User component");
})

module.exports=app;