import { product,sweet,restaurants } from "./ob1.js";
import http from "http"; 
var server=http.createServer((req,res)=>{
    if(req.url=="/products" && req.method=="GET"){
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(product));
        res.end();
    }else if(req.url=="/sweets" && req.method=="GET"){
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(sweet));
        res.end();
    }else if(req.url=="/restaurants" && req.method=="GET"){
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(restaurants));
        res.end();
    }
    else{
        res.write("Currently Unavailable");
        res.end();
    }
})
server.listen(3000,()=>{
    console.log("server is running");
    
})