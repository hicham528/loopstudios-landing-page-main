let close_nav=document.getElementById("close_nav"),
open_nav=document.getElementById("open_nav"),
navbare=document.querySelector(".navbare");

open_nav.onclick=()=>{
    navbare.classList.add("new_nav")
    open_nav.style.display="none"
}
close_nav.onclick=()=>{
    navbare.classList.remove("new_nav")
     open_nav.style.display="block"
}