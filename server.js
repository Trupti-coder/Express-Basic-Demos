var http=require('http');
var msg=require('./modules/student1');
http.createServer(function(req,res){
    res.write("Hello from nodejs!1"+msg);
    res.end();
}).listen(3000,function(){
    console.log("server listening at port no:3000");
});