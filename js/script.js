

let theme=document.querySelector(".theme");
let dark=document.querySelector(".dark");
let light=document.querySelector(".light");
let focus=document.querySelector(".focus");
let isLight=true;

theme.addEventListener("click", ()=>{
    if(isLight){
        focus.classList.remove("left");
        focus.classList.add("right")
        isLight=!isLight;
    }else{
        focus.classList.remove("right");
        focus.classList.add("left")
        isLight=!isLight;
    }
   
    
})