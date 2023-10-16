 //  IIFE => Immediately Invoked Function Expression
//           function that is executed as soon as it is defined.

(function() {
    // Code to be executed immediately
  })();

  

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('abhinav')