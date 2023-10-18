// for of maps pr to kaam kr rha tha lekin objects pr nhi kr rha tha uske liye for in loop use krenge 

// for in  => objects pr loop lgane k liye 

const myObject = {
    js :'javascript',
    cpp: 'c++',
    rb: 'ruby',
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js","cpp","rb","py"]

for (const key in programming) {
    console.log(programming[key]);
}