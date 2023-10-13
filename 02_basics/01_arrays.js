const myArr = [0,1,2,3,4,5,6,"abhinav",true]


const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // array ke start me ayega isse 
// myArr.shift() // removes the first element of the given array and returns that element

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // string me convert krne k liye 

// console.log(myArr);
// console.log( newArr);


// slice, splice



console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);  

// splice se original array me change aata hai aur slice se ref array me hi change aata hai orginal me farq nhi pdta