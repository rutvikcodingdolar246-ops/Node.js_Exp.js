//Import EventEmitter class

const EventEmitter = require ('events');

// Create an instance of EventEmitter

const emitter = new EventEmitter();
//1. Define an event listener(addListener)
emitter.on("greet",(username,prof) =>{
    console.log(`hello ${username},You are a ${prof}, ri8`);
});
//2. trigger (emit) the "greet" event
emitter.emit("greet","Rutvik dolar", "Full Stack Dev");


//! but it's best idea to take a single argument as an object

emitter.on("greet",(username,prof)=>{
    console.log(`hello${username},you are a ${prof},ri8`);
    
})
emitter.emit("greet",{username: "Rutvik",prof:"full Stack"});

