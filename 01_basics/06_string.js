const name = "shubham"
const repocount = "40"

console.log(`hello my name is ${name} and my repo count is ${repocount}`);
const gameName = new String('shubham')
console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf(4));
const newString = gameName.substring(0,4)
console.log(newString)
const anotherString = gameName.slice(-5,4)
console.log(anotherString)
const newStringone = "  shubham    "
console.log(newStringone);
console.log(newStringone.trim());
const url = "http://shubham.hardiya20%.com"
console.log(url.replace('20%','-'))
console.log(url.includes("sundar"))