var express=require("express");
var app=express();

app.use(express.json());

app.listen("9900",()=>
{
    console.log("Server started..");
})