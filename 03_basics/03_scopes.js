// {} => isi ko scope bolte hai 

/*

 if(true){
 
        // iske andar jo ayega wo block scoped hoga aur bahar jo bhi hoga wo global scoped 

 }

*/

function one() {
    const username = "abhinav"

     function two() {
        const website ="youtube"
        console.log(username);
     }

    // console.log(website); // ye error throw krega kyunki hum username ko access nhi kr payenge 

     two()
}

one()


/*___________________________interesting________________________________*/

function addone(num1) {
    return num1 + 1
    
}
addone(6)


const addtwo = function(num){
    return num + 2
}

addtwo(5)