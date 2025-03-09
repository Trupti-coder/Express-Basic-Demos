
var fs=require('fs');
 var http=require('http');

fs.writeFile("test.txt","Hello this is node",function(err){
    if(!err){
        console.log("written successfully");
    }
    else{
        console.log("error");
    }
})

http.createServer(function(req,res){
    

}).listen(3000,function(){
    console.log("Server listening at port no:3000");
})





