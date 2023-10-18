// filter => creates a shallow copy of a portion of a given array, filtered down to just the elements 
//           from the given array that pass the test implemented by the provided function.

// example 1
const myNums = [1,2,3,4,5,6,7,8,9]

let newNums  = myNums.filter( (num)=> num >4 )
let newNums2 = myNums.filter( (num)=> {
      return num >4
})// agar hum scope laga rhe hai to return lgana pdega 

console.log(newNums);



// example 2
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);


// example 3
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userBook = books.filter( (bk)=> bk.genre === 'History'  )
const userBookPublish = books.filter( (bk)=> {
      return  bk.publish >= 2000
      
})

console.log(userBook)
console.log(userBookPublish)