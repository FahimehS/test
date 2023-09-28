let w = document.querySelector("input");

let text = document.querySelector(".text");

let num = document.querySelector(".numberC");

let button = document.querySelector(".button1");



// let clicked = false 
function reverseText () {
let reverse = w.value;
return reverse.split("").reverse().join("") ;
}

 function test () {

  num.innerHTML = w.value.length;
  let R = reverseText () ;
  text.innerHTML =  R 
 

  setTimeout(function () {
    text.innerHTML = "";
  }, 5000);
 }

 button.addEventListener("click" , test)


