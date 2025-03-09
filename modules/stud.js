var fs=require('fs');
var http=require('http');
var student=require('./modules/stud');
var data=student.getStudent();
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

})