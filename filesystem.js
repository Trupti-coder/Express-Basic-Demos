var fs=require("fs");
//write operation
    fs.writeFile("test.txt","hello again ",function (err){
        if(!err){
            console.log("hello from node");
        }
        else{
            console.log("error");
        }
    })

    //read operation
    fs.readFile("test.txt",function(err,data){
        if(!err){
            console.log(data.toString());
        }
    })

    //append operation
    fs.appendFile("test.txt","hiii",function(err){
        if(!err){
            console.log("write op successfully");
        }

    })