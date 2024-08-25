const marvel_heros = ["thor","ironman","spiderman"]
const DC_heros = ["superman","Batman","Flash"]
const myHeors = ["Hanuman","Ram","krishna"]

// marvel_heros.push(DC_heros)
// console.log(marvel_heros[3][1])
// const allmarvelheros=marvel_heros.concat(DC_heros)
// console.log(allmarvelheros)
// const all_new_heros = [...DC_heros, ...marvel_heros, ...myHeors]
// console.log(all_new_heros)

const another_Arry = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_Arry = another_Arry.flat(Infinity)
console.log(real_another_Arry)

console.log(Array.isArray("shubham"))
console.log(Array.from("shubham"))
console.log(Array.from({Name:"shubham"}))


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))