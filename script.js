
let a = document.querySelector("#counter");
let p = document.querySelector("#error");
let count = 0;

let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let clear = document.querySelector("#clear");

a.innerHTML = "Your Current Count is : 0";
clear.style.display = "none";

increment.addEventListener("click",()=>{
  count++;
  p.classList.remove("red");
  p.innerHTML = "";
  a.innerHTML = "Your Current Count is : " + count;
  
  if(count>1){
    clear.style.display = "block";
  }
})

decrement.addEventListener("click",()=>{
    if (count === 0) {
        p.innerHTML = "Error: Cannot Go below 0";
        p.classList.add("red");
        return; 
    }

    count--;

    a.innerHTML = "Your Current Count is : " + count;
    p.innerHTML = "";
    p.classList.remove("red");
  
    if (count <= 1) {
      clear.style.display = "none";
    }
})

clear.addEventListener("click" , ()=>{
    count = 0;
    a.innerHTML = "Your Current Count is : " + count;
    p.innerHTML = "";
    p.classList.remove("red");
    clear.style.display = "none";
})