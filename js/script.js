

let theme=document.querySelector(".theme");
let dark=document.querySelector(".dark");
let light=document.querySelector(".light");
let focus=document.querySelector(".focus");
let isLight=true;
let darkModeSection=document.querySelector(".darkMode .section");
let lightModeSection=document.querySelector(".lightMode .section");

let select=document.querySelector("#lang");

let darkLeft=document.querySelector(".darkLeft");
let lightRight=document.querySelector(".lightRight");
let h1=document.querySelectorAll(".h1");
let p=document.querySelectorAll(".p");
let button=document.querySelectorAll(".button")




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
    if(event.target.value=='uzb'){
        darkLeft.innerHTML="QORONG'U REJIM"
        lightRight.innerHTML="Yorug' REJIM"
        h1[0].innerHTML="Figma bilan ijodkorlik kuchini oching!";
        p[0].innerHTML="Dizayn o'yiningizni oshirishga tayyormisiz?"
        button[0].innerHTML="Endi Figma-ni sinab ko'ring"
        h1[1].innerHTML="Figma bilan ijodkorlik kuchini oching!";
        p[1].innerHTML="Dizayn o'yiningizni oshirishga tayyormisiz?"
        button[1].innerHTML="Endi Figma-ni sinab ko'ring"
    } else if(event.target.value=='eng'){
        darkLeft.innerHTML="DARK MODE"
        lightRight.innerHTML="LIGHT MODE"
        h1[0].innerHTML="Unlock the Power of Creativity with Figma!";
        p[0].innerHTML="Ready to elevate your design game? "
        button[0].innerHTML="Try Figma now"
        h1[1].innerHTML="Unlock the Power of Creativity with Figma!";
        p[1].innerHTML="Ready to elevate your design game? "
        button[1].innerHTML="Try Figma now"
    }else if(event.target.value=='rus'){
        darkLeft.innerHTML="ТЕМНЫЙ РЕЖИМ"
        lightRight.innerHTML="СВЕТОВОЙ РЕЖИМ"
        h1[0].innerHTML="Раскройте силу творчества с Figma!";
        p[0].innerHTML="Готовы улучшить свою дизайнерскую игру?"
        button[0].innerHTML="Попробуйте Фигму прямо сейчас"
        h1[1].innerHTML="Раскройте силу творчества с Figma!";
        p[1].innerHTML="Готовы улучшить свою дизайнерскую игру?"
        button[1].innerHTML="Попробуйте Фигму прямо сейчас"
    }
})