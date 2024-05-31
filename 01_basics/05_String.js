
const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");//old version
//String interpolation is a technique used in computer programming to embed expressions within a string literal
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//backtick new version 

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);
//substring() treats negative indices as 0, effectively ignoring them, while slice() allows negative indices to count from the end of the string.
//Both methods extract characters up to, but not including, the end index. If the start index is greater than the end index,
// substring() will swap them before extraction, while slice() will return an empty string.
const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))//to check whether string present or not

console.log(gameName.split('-'));
