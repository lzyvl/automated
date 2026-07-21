/* =========================
   VANTA — SCRIPT.JS
========================= */


/* =========================
   SCROLL REVEAL ANIMATION
========================= */


const fadeElements = document.querySelectorAll(".fade");


const revealOnScroll = () => {

    fadeElements.forEach(element => {

        const position = element.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;


        if(position < screenHeight - 100){

            element.classList.add("show");

        }

    });

};


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();



/* =========================
   MOUSE GLOW FOLLOWER
========================= */


const glow = document.createElement("div");


glow.className = "mouse-glow";


document.body.appendChild(glow);



const glowStyle = document.createElement("style");


glowStyle.innerHTML = `

.mouse-glow {

position:fixed;

width:300px;

height:300px;

border-radius:50%;

background:

radial-gradient(
circle,
rgba(43,127,255,.18),
transparent 70%
);


pointer-events:none;

transform:translate(-50%,-50%);

z-index:-1;

filter:blur(20px);

}

`;


document.head.appendChild(glowStyle);



document.addEventListener(
"mousemove",
(e)=>{


glow.style.left = e.clientX + "px";

glow.style.top = e.clientY + "px";


});





/* =========================
   HERO PARALLAX
========================= */


const heroShape = document.querySelector(".hero::after");


const shape = document.querySelector(".hero");


if(shape){


document.addEventListener(
"mousemove",
(e)=>{


let x = 
(e.clientX / window.innerWidth - .5) * 30;


let y = 
(e.clientY / window.innerHeight - .5) * 30;



shape.style.transform =
`
translate(${x}px,${y}px)
`;



});


}



/* =========================
   NAVBAR BACKGROUND CHANGE
========================= */


const nav = document.querySelector("nav");


window.addEventListener(
"scroll",
()=>{


if(window.scrollY > 50){

nav.style.background =
"rgba(3,3,3,.75)";


nav.style.borderBottom =
"1px solid rgba(255,255,255,.08)";


}

else{


nav.style.background =
"transparent";


nav.style.borderBottom =
"none";


}


});




/* =========================
   BUTTON RIPPLE EFFECT
========================= */


const buttons =
document.querySelectorAll(".btn");



buttons.forEach(button=>{


button.addEventListener(
"click",
function(e){


let ripple =
document.createElement("span");


ripple.className="ripple";


this.appendChild(ripple);



setTimeout(()=>{

ripple.remove();

},600);



});


});




const rippleStyle =
document.createElement("style");


rippleStyle.innerHTML=`

.btn {

position:relative;
overflow:hidden;

}


.ripple {

position:absolute;

width:150px;

height:150px;

background:
rgba(255,255,255,.25);


border-radius:50%;


transform:translate(-50%,-50%);


animation:ripple .6s linear;


}



@keyframes ripple {


from{

opacity:1;

transform:
scale(0);

}


to{

opacity:0;

transform:
scale(4);

}


}


`;



document.head.appendChild(rippleStyle);




/* =========================
   SMOOTH PAGE LOAD
========================= */


window.addEventListener(
"load",
()=>{


document.body.style.opacity="1";


});

