const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) //concat two or more arrays
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]//spread operator:similar to conact(mostly used)

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
//Array.prototype.flat() method is used to create a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// here depth is set to be infinity
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))//false
console.log(Array.from("Hitesh"))//convert into array,it creates an array where each element is a character from the string.
console.log(Array.from({name: "hitesh"})) // interesting output:[]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//return a new array from set of element