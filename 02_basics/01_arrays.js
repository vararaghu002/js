
// const myArr=[0,1,2,3,4,5]

//js arrays are resizable and can be mix of different datatypes
//js arrays array-copy operations create shallow copies
//Array declaration
// const myArr = [0,1,2,3,4,5]
// const myhero = ["ram","raghu"]
// const myArr2=new Array(1,2,3,4,5)
// console.log(arr[1])

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) 9 is added at first index
// myArr.shift() first index element is removed

// console.log(myArr.includes(9)); false
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() join all the element ,convert in string and return

// console.log(myArr);
// console.log( newArr);


// slice, splice

const myArr=[0,1,2,3,4,5]
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);//[1,2]
console.log("B ", myArr);//[0,1,2,3,4,5]


const myn2 = myArr.splice(1, 3) //remove from 1 index to 3rd index and return;
console.log("C ", myArr);//[0,4,5]
console.log(myn2);//[1,2,3]