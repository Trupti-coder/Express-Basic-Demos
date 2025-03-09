//let str=require('./modules/student');
//console.log(str.msg)
//let sum=str.getSum(2,2);
//console.log(sum);


/*var fs=require('fs');
var http=require('http');
var stud=require('./modules/student');
var data=stud.getStudents();
var obj=JSON.stringify(data);

//write to file
fs.writeFile("test.txt",obj,function(err){
    if(!err){
        console.log("written successfully");
    }

    

})
http.createServer(function(req,res){
    fs.readFile("test.txt",function(err,fd){
        if(!err){
            res.write(fd);
            res.end();
        }

    })
    
}).listen(3000,function(){
    console.log("Server at port no 3000");

})*/


//day 3


/*if(req.url=="/students" && req.method=="GET"){
    fs.readFile("test.txt",function(err,fd){
        if(!err){
            res.write(fd);
            res.end();
        }
    })

}
if(req.url=="/" && req.method=="GET"){
    res.write("this is home page!!");
    res.end();

}
if(req.url=="/newStudent" && req.method=="POST"){

}

//read operation
fs.readFile("test.txt",function(err,fd){
if(!err){
    console.log(fd.toString());
    res.end();
}
})*/

//day 4  using express.js

var express=require('express');//import express module
var app=express();//create instance of the express application

var routes=require('./routes');
 app.use("/studApp",routes); //The app.use() method adds middleware to your application



app.listen(3000,function(){
    console.log("server listening at port 3000");
})










