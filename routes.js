
var express=require('express');

var router=express.Router();

var stud=require("./modules/student");

//body parser
var bodyParser=require('body-parser');
router.use(bodyParser.urlencoded({extended:false}));   //do u want third party
router.use(bodyParser.json());
router.use(bodyParser.raw());




//setting the middleware
router.use(express.static('public'));
//serves all the request which includes /images in the url form Images
router.use('/images',express.static(__dirname + '/images'));





//send file
router.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html",function(err){
        if(err){
            res.send(err);
        }
    });
})


router.get("/student",function(req,res){       //This defines a route for handling HTTP GET requests to the path “/student”.
    var result=stud.getStudents();              //stud.getStudent() retrieves some data related to students.
    //res.send(result);
    if(!result){
        res.json({status:false});

    }else{
        res.json({status:true,"data":result})
    }
})

//request parameter
router.get("/student/:rno/",function(req,res){
    var x=req.params.rno;//fetch using params

    var result=stud.getStudent(x);// retrieves some data related to students based on the extracted value.
    //res.send(result);
    if(!result){
        res.json({status:false});

    }else{
        res.json({status:true,"data":result});
    }
})

//query string

router.get("/getStudent",function(req,res){
    let rno=req.query.txtRollno;
    let name=req.query.txtName;
    let mrk=req.query.txtMarks;
    console.log(rno,name,mrk);
    var result=stud.getStudent(rno);
    if(!result){
        res.json({status:false});

    }else{
        res.json({status:true,"data":result});
    }
})
router.post("/newStudent",function(req,res){
    var rno=req.body.rollno;
    var name=req.body.name;
    console.log(rno,name);
    var obj=stud.addStudent(req.body);
    if(!obj){
        res.send("not interested");
    }
    else{
        res.json({msg:"data inserted!!"});
    }
    res.send(req.body);

}) 
          //update operation
router.put("/updateStudent/:rno",function(req,res){//first parameter is always url and second parameter is callback function
    var rno=req.params.rno;                          //request parameter use params & query string use query
    var mks=req.body.marks;
    var obj=stud.updateStud(rno,mks);
    if(obj){
        res.json({"msg":"record Update",data:obj});
    }
    else{
        res.json({"msg":"not updated"});
    }
})
        //delete operation
        
router.delete("/removeStud/:rno",function(req,res){
    var rno=req.params.rno;
    var result=stud.removeStud(rno);
    if(result){
        res.json({"msg":"record deleted",data:result});

    }
    else{
        res.json({"msg":"not deleted"});
    }
})

// cookie demo 

//create cookie
var cookieParser=require('cookie-parser');
router.use(cookieParser());

router.post("/createCookie",function(req,res){
    res.cookie("color","red",{maxAge:800000});
    console.log("cookie created");
    res.send("created cookie");



})       //delete cookie
router.get("/deleteCookie",function(req,res){
    var result=res.clearCookie("color");
    if(result){
        console.log(result);
        res.send("cookie deleted");
    }
})       //read cookie
router.get("/readCookie/:cookieName",function(req,res){
    var cookieName=req.params.cookieName;
    console.log(cookieName);
    var cookieValue=req.cookies[cookieName];
    console.log(cookieValue);
    res.send(cookieValue);
})



//session demo 

var session=require("express-session");
router.use(session({resave:true,
    saveUninitialized:false,
    secret:"hello"}));
    router.get("/sessionDemo",function(req,res){
        var count=0;
        if(!req.session.count){
            req.session.count=1;
            count=req.session.count;
        }
        else{
            var count=req.session.count;
            console.log(count);
            count++;
            console.log(count);
            req.session.count=count;
        }
        res.send({"count=":count});
    })


module.exports=router;



