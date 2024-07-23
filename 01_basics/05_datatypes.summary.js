// Two types of datatype 
// Primitive  , non Primitive
// 7 types Primitive : string , Number , boolearn , Null , Symbole , undefined , BigInt.

const sore = 100
const scoreValue = 100.3

const isLoggIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

const bigNumber = 7324895878579985498n


// Non Primitive : Array , Objects , Functions.
//Array
const heros = ["KRISHNA" , "RAM" , "Hanuman"]
// Objects
let myobj = {
    name: "Shubham",
    Age: "28"    
}
//functions
const myfunction = function(){
    console.log("hello World");
}
console.log(typeof scoreValue);