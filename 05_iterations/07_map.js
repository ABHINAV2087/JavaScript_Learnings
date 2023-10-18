// Maps => The Map object holds key-value pairs and remembers the original insertion order of the keys. 
//        Any value (both objects and primitive values) may be used as either a key or a value.


const myNums = [1,2,3,4,5,6,7,8,9]

const resultarr = myNums.map( (num) => num + 10 ) 
console.log(resultarr);


const newnums = myNums
                    .map( (num)=>num*10 )
                    .map((num)=> num+2 )
                    .filter( (num) => num>=40 )
                    // we can use such type of chaining to perform multiple operations

console.log(newnums);