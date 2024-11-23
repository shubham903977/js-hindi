

function sayMyname(params) {
    console.log("s");
    console.log("h");
    console.log("u");
    console.log("b");
    console.log("h");
    console.log("a");
    console.log("m");
}
//sayMyname()

// function addtwonumber(number1,number2) {
//     console.log(number1 + number2);        
// }

function addtwonumber(number1,number2) {
    //let result =number1 + number2;
    //console.log("shubham");
    return number1 + number2                
}

//const result = addtwonumber(3,5)

//console.log("Result: ",result);

function loginUsermsg(username) {
    if(username===undefined){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`    
}
console.log(loginUsermsg("shubham"))
 

