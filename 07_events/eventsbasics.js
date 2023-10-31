// event propagation 
document.getElementById('owl').addEventListener('click', function(e){
     console.log("owl clicked");
     e.stopPropagation()
 }, false)