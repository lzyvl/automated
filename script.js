/* =========================
VANTA PREMIUM SCRIPT.JS
========================= */


/* =========================
PAGE LOADING ANIMATION
========================= */


window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});




/* =========================
SCROLL REVEAL
========================= */


const reveals = document.querySelectorAll(".fade");


function reveal(){

    reveals.forEach(item=>{


        const position =
        item.getBoundingClientRect().top;


        if(position < window.innerHeight - 120){

            item.classList.add("show");

        }


    });


}


window.addEventListener(
"scroll",
reveal
);


reveal();






/* =========================
NAVBAR BLUR
========================= */


const nav = document.querySelector("nav");


window.addEventListener(
"scroll",
()=>{


if(window.scrollY > 60){


nav.style.background =
"rgba(2,2,2,.75)";


nav.style.backdropFilter =
"blur(20px)";


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
CURSOR GLOW
========================= */


const glow =
document.createElement("div");


glow.className =
"vanta-glow";


document.body.appendChild(glow);



const glowCSS =
document.createElement("style");


glowCSS.innerHTML = `

.vanta-glow{

position:fixed;

width:300px;

height:300px;

border-radius:50%;


background:

radial-gradient(
circle,
rgba(43,127,255,.22),
transparent 70%
);


pointer-events:none;

transform:translate(-50%,-50%);

filter:blur(25px);

z-index:-1;

}

`;


document.head.appendChild(glowCSS);




document.addEventListener(
"mousemove",
(e)=>{


glow.style.left =
e.clientX+"px";


glow.style.top =
e.clientY+"px";


});







/* =========================
HERO PARALLAX
========================= */


const heroShape =
document.querySelector(".hero-shape");


document.addEventListener(
"mousemove",
(e)=>{


if(heroShape){


const x =
(e.clientX /
window.innerWidth - .5)
*40;



const y =
(e.clientY /
window.innerHeight - .5)
*40;



heroShape.style.transform =
`
translate(${x}px,${y}px)
`;

}


});









/* =========================
3D CARD TILT
========================= */


const cards =
document.querySelectorAll(".card");



cards.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


const rect =
card.getBoundingClientRect();



const x =
e.clientX - rect.left;


const y =
e.clientY - rect.top;



const rotateX =
((y / rect.height)-.5)*10;


const rotateY =
((x / rect.width)-.5)*10;



card.style.transform =

`

perspective(800px)

rotateX(${-rotateX}deg)

rotateY(${rotateY}deg)

translateY(-10px)

`;



});





card.addEventListener(
"mouseleave",
()=>{


card.style.transform =
"";


});


});









/* =========================
MAGNETIC BUTTONS
========================= */


const buttons =
document.querySelectorAll(".btn");



buttons.forEach(button=>{


button.addEventListener(
"mousemove",
(e)=>{


const rect =
button.getBoundingClientRect();



const x =
e.clientX - rect.left -
rect.width/2;


const y =
e.clientY - rect.top -
rect.height/2;



button.style.transform =

`

translate(
${x*.15}px,
${y*.15}px
)

`;



});




button.addEventListener(
"mouseleave",
()=>{


button.style.transform =
"";


});


});









/* =========================
SMOOTH ANCHOR SCROLL
========================= */


document.querySelectorAll(
'a[href^="#"]'
)

.forEach(anchor=>{


anchor.addEventListener(
"click",
function(e){


const target =
document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});


});
