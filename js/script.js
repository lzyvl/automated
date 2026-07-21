/* ==========================
   VANTA JAVASCRIPT
========================== */


/* ==========================
   MOUSE ENERGY TRAIL
========================== */

document.addEventListener(
"mousemove",
(e)=>{

let trail = document.createElement("div");

trail.className = "trail";


trail.style.left = e.clientX + "px";
trail.style.top = e.clientY + "px";


document.body.appendChild(trail);



setTimeout(()=>{

trail.style.opacity="0";

trail.style.transform="scale(0)";

},50);



setTimeout(()=>{

trail.remove();

},600);


}

);



/* ==========================
   ABOUT SCROLL REVEAL
========================== */


const about = document.querySelector(".about");


if(about){

window.addEventListener(
"scroll",
()=>{


let position = about.getBoundingClientRect().top;


if(position < window.innerHeight - 150){

about.classList.add("show");

}


}

);

}



/* ==========================
   SMOOTH SCROLL
========================== */


document.querySelectorAll("a[href^='#']").forEach(link=>{


link.addEventListener(
"click",
function(e){


const target = document.querySelector(
this.getAttribute("href")
);


if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}


}

);


});



/* ==========================
   BUTTON HOVER TILT
========================== */


const buttons = document.querySelectorAll("button");


buttons.forEach(button=>{


button.addEventListener(
"mousemove",
(e)=>{


const rect = button.getBoundingClientRect();


const x =
e.clientX - rect.left;


const y =
e.clientY - rect.top;



button.style.transform =
`
perspective(400px)
rotateX(${-(y-rect.height/2)/15}deg)
rotateY(${(x-rect.width/2)/15}deg)
`;



}

);



button.addEventListener(
"mouseleave",
()=>{


button.style.transform="";


}

);


});



/* ==========================
   PREVIEW PARALLAX
========================== */


const preview =
document.querySelector(".preview");


if(preview){


document.addEventListener(
"mousemove",
(e)=>{


let x =
(e.clientX / window.innerWidth - .5) * 10;


let y =
(e.clientY / window.innerHeight - .5) * 10;



preview.style.transform =
`
perspective(1200px)
rotateY(${-8+x}deg)
rotateX(${y}deg)
`;



}

);


}
