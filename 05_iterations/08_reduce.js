// reduce => executes a user-supplied "reducer" callback function on each element of 
//          the array, in order, passing in the return value from the calculation on 
//          the preceding element. The final result of running the reducer across all 
//          elements of the array is a single value.


// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue
// );

// console.log(sumWithInitial);
// // Expected output: 10




const myNums = [1,2,3]

const myTotal = myNums.reduce( function(acc, currval){
    console.log(`Acc: ${acc} and Currval: ${currval}`)
    return acc + currval

},0)

const myTotal2 = myNums.reduce( (acc,curr) => acc + curr , 0)

console.log(myTotal);
console.log(myTotal2);

// Example 2

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999,
    },
    {
        itemName: "py course",
        price: 2499,
    },
    {
        itemName: "java course",
        price: 299,
    }
]

const cartTotal = shoppingCart.reduce((acc, item) => acc + item.price , 0)

console.log(cartTotal);