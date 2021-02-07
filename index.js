const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url == "/"){
        res.end("welcome to home page");
    } else if(req.url == "/about"){
        res.end("welcome to about page");
    } else if(req.url == "/userapi"){
        fs.readFile(`${__dirname}/UserAPI/users.json`, "utf-8", (err, data)=>{
            console.log(data)
            res.end(data);
        });
        
    }else{
        res.writeHead(404);
        res.end("404 error page");
    }
});

server.listen(3000, "127.0.0.1",() =>{
    console.log("success")   
});