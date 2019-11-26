var express=require("express");
var app=express();
var userRouter=require("./route/user");
app.use(express.json());
app.use("/",userRouter);
app.listen("9900",()=>
{
    console.log("Server started..");
})