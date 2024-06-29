

let theme=document.querySelector(".theme");
let dark=document.querySelector(".dark");
let light=document.querySelector(".light");
let focus=document.querySelector(".focus");
let isLight=true;
let darkModeSection=document.querySelector(".darkMode .section");
let lightModeSection=document.querySelector(".lightMode .section");

let select=document.querySelector("#lang");


light.style.opacity="0.5"

theme.addEventListener("click", ()=>{
    if(isLight){
        focus.classList.remove("left");
        focus.classList.add("right")
        isLight=!isLight;
        darkModeSection.style.display="none"
        lightModeSection.style.display="block"
        dark.style.opacity="0.5";
        light.style.opacity="1"

    }else{
        focus.classList.remove("right");
        focus.classList.add("left")
        isLight=!isLight;
        darkModeSection.style.display="block"
        lightModeSection.style.display="none"
        dark.style.opacity="1";
        light.style.opacity="0.5"
    }
   
    
})


select.addEventListener("change", (event)=>{
    console.log(event.target.value);
})