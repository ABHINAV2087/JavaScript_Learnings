// for each loop => callback function hota hai 

const coding = ["js","cpp","py","java","ruby","c#"]

// coding.forEach( function (item){
//     console.log(item);
// } )



// coding.forEach( (params)=> {
//     console.log(params);
// })



function printme(item) {
    console.log(item);
}

coding.forEach(printme) // agar hamare paas pehle se function bana hua h to 




coding.forEach( (item, index ,Array)=>{
    console.log(item , index, Array);
})


const coding2 = [
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
    {
        languageName:"java",
        languageFileName:"java"
    }
]

coding2.forEach( (item)=>{
    console.log(item.languageName);
})