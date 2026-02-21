

const http = require("http");





// web Server

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.setHeader("Content-Type","text/html")
        res.write("<h1>I Dolar Rutvik </h1>");
        res.end();
    }
    if(req.url === "/about")
     {
        res.write("My Name is :- Dolar Rutvik \n My Father Name:- Dolar Mukeshbahi Bhikhabhai  ")
       res.end(); 
    }
    if(req.url === "/contact"){
        res.setHeader("Content-Type","text/plain")
        res.write("Have a Project or want to Collaborate?")
        res.end();
    }
})



// creating port 
const PORT = 3000;

server.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
    
})
