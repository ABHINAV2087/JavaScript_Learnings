// for of loop

["","","",""]

[{},{},{},{}]

const arr = [1,2,3,4,5,6]

for (const num of arr ){
    console.log(num);
}




// Maps => The Map object holds key-value pairs and remembers the original insertion order of the keys. 
//         Any value (both objects and primitive values) may be used as either a key or a value.

const map1 = new Map()
map1.set('IN',"India")
map1.set('USA',"United States of America")
map1.set('FR',"France")

console.log(map1);

for (const [key , value] of map1) {
    console.log(key,"=",value);
}