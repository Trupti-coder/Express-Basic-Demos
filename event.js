var event=require('events');  //You’ve created an instance of EventEmitter called emitter
var emitter=new event.EventEmitter();

emitter.addListener("firstEvent",function(){
    console.log("First Event !!!");
})
var fun=function(){
    console.log("second Event!!!");
}

emitter.on("secondEvent",fun)
emitter.once("eventOne",function(){
    console.log("executed only once!!");
})
//emiting event
emitter.emit("firstEvent"); //logs first event
emitter.emit("secondEvent");//logs second event
emitter.emit("eventOne");//logs exexcuted only once

emitter.removeListener("secondEvent",fun);//remove the second event ,  So, no more “second Event!!!” logs after this point.
emitter.emit("firstEvent");
emitter.emit("secondEvent");
emitter.emit("eventOne");
console.log(event.EventEmitter.defaultMaxListeners)//This property defines the maximum number of listeners that can be added to a single event.



