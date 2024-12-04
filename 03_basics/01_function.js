

// function sayMyname(params) {
//     console.log("s");
//     console.log("h");
//     console.log("u");
//     console.log("b");
//     console.log("h");
//     console.log("a");
//     console.log("m");
// }
// //sayMyname()

// // function addtwonumber(number1,number2) {
// //     console.log(number1 + number2);        
// // }

// function addtwonumber(number1,number2) {
//     //let result =number1 + number2;
//     //console.log("shubham");
//     return number1 + number2                
// }

// //const result = addtwonumber(3,5)

// //console.log("Result: ",result);

// function loginUsermsg(username) {
//     if(username===undefined){
//         console.log("Please enter username");
//         return
//     }
//     return `${username} just logged in`    
// }
// // console.log(loginUsermsg("shubham"))
// //function calculatecardprice(val1,val2,...num1) {
//     //return num1   
// //}
// // console.log(calculatecardprice(200,400,500));

const user = {
    username: "shubham",
    price: 199
};

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user);
//handleObject({
   // username: "nanu",
    //price: 300
//})

const Mynewarray = [200,300,400,500]


function loginUsermsg(username) {
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`    

function returnsecondvalue(getarray) {
    return getarray[1]    
 
}
// console.log(returnsecondvalue(Mynewarray));
console.log(returnsecondvalue([200,600,400,500]))}
