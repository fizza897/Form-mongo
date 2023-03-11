const express=require("express")
const server=express();
const core=require("cors")
server.use(core());
server.post("/demo",(req,res)=>{
    console.log(req.body)
    res.send("Hello");
})

server.listen(8080,()=>{
    console.log("Server Started")
})