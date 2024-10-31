const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name ="samy"
tinderUser.isLoggedIN = false


//console.log(tinderUser);
const regularUser = {
    email: "shubham@google.com",
    fullname: {
        userfullname: {
            firstname: "shubham",
            lastname: "hardiya"

        }
    }

}

//console.log(regularUser.fullname.userfullname.firstname);

const Obj1 = {1: "a", 2: "b"}
const Obj2 = {3: "a", 4: "b"}
const Obj4 = {5: "a", 6: "b"}
 
//const obj3 = {Obj1,Obj2}
const obj3 = Object.assign ({},Obj1,Obj2,Obj4)
//console.log(obj3);

const user = [
    {
        id:1,
        email:"shub@googal.com"
    }, {
        id:1,
        email:"shub@googal.com"
    }, {
        id:1,
        email:"shub@googal.com"
    }, {
        id:1,
        email:"shub@googal.com"
    }, {
        id:1,
        email:"shub@googal.com"
    }, {
        id:1,
        email:"shub@googal.com"
    },
]

user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIN'));







