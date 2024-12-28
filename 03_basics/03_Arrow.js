const user = {
    username : "Shubham",
    Perice : 999,

    welcomemessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
            
    }
}
// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()
//console.log(this);
// function chai() {
//     console.log(this);
//     let username = "shubham"    
// }
// chai()

// const chai = function () {
//     let username = "shubham"
//     console.log(this.username);   
// }

const chai =  () => {
    let username = "shubham"
    console.log(this.username);   
}
//chai()

// const addtwo= (num1,num2)  => {
//     return num1 + num2
// }

//const addtwo= (num1,num2)  =>  num1 + num2

const addtwo= (num1,num2)  =>  ({username:"shubham"})
    



console.log(addtwo(3,7)) 
