const mySym = Symbol("Key1")

const shubuser = {
    name: "shubham",
    "full name":"shubham hardiya",
    Age: 29,
    [mySym]: "mykey1",
    location: "Indore",
    email: "shubham@googal.com",
    isloggenInn: false,
    lastlogindays:["monday","saturday"]
}
// console.log(shubuser.email)
// console.log(shubuser["email"])
// console.log(shubuser["full name"])
// console.log(shubuser[mySym])
// shubuser.email = "shubham@chatgpt.com"
// Object.freeze(shubuser)
// shubuser.email = "shubhammicrosoft.com"
//console.log(shubuser)

shubuser.greeting = function(){
    console.log("hellow js user")
}
console.log(shubuser.greeting)

shubuser.greetingtwo = function(){
    console.log(`hellow js user,${this.name}`)
}
console.log(shubuser.greeting());
console.log(shubuser.greetingtwo());
