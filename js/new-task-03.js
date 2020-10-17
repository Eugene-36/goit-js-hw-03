// Write a function "greet" that returns "hello world!"
const greet = function(name){
    let hello =  "hello"
    let world = "world!"
    let fullWord =  `${hello} ${world}`
    return  name == 'hello world!' ? undefined : `${fullWord}`;
     
    }
    
     console.log(greet('hello world!'))