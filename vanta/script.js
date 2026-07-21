/* =========================
VANTA FINAL SCRIPT
========================= */


/* =========================
NAVBAR BLUR
========================= */


const navbar = document.querySelector(".navbar");


window.addEventListener("scroll",()=>{


if(window.scrollY > 60){

navbar.style.background =
"rgba(5,5,5,.75)";

navbar.style.backdropFilter =
"blur(20px)";

navbar.style.borderBottom =
"1px solid rgba(255,255,255,.08)";


}

else{


navbar.style.background =
"transparent";


navbar.style.backdropFilter =
"none";


navbar.style.borderBottom =
"none";


}


});







/* =========================
SMOOTH SCROLL
========================= */


document.querySelectorAll(
'a[href^="#"]'
)

.forEach(link=>{


link.addEventListener(
"click",
(e)=>{


const section =
document.querySelector(
link.getAttribute("href")
);



if(section){

e.preventDefault();


section.scrollIntoView({

behavior:"smooth"

});


}


});


});









/* =========================
SCROLL REVEAL
========================= */


const animatedElements =
document.querySelectorAll(
".card,.demo-card,.price-card,.faq div"
);



animatedElements.forEach(el=>{


el.style.opacity="0";

el.style.transform=
"translateY(50px)";


el.style.transition=
"all .8s ease";


});




function reveal(){


animatedElements.forEach(el=>{


const top =
el.getBoundingClientRect().top;


if(top <
window.innerHeight - 100){


el.style.opacity="1";


el.style.transform=
"translateY(0)";


}


});


}



window.addEventListener(
"scroll",
reveal
);


reveal();









/* =========================
MOUSE GLOW
========================= */


const glow =
document.createElement(
"div"
);


glow.className =
"mouse-glow";


document.body.appendChild(
glow
);



const glowCSS =
document.createElement(
"style"
);


glowCSS.innerHTML=`

.mouse-glow{

position:fixed;

width:350px;

height:350px;

border-radius:50%;


background:

radial-gradient(
circle,
rgba(43,127,255,.15),
transparent 70%
);


pointer-events:none;


transform:
translate(-50%,-50%);


filter:blur(30px);


z-index:-1;

}


`;



document.head.appendChild(
glowCSS
);




document.addEventListener(
"mousemove",
(e)=>{


glow.style.left =
e.clientX+"px";


glow.style.top =
e.clientY+"px";


});









/* =========================
DEMO OPENING SYSTEM
========================= */


const demos =
document.querySelectorAll(
".demo-card"
);



demos.forEach(card=>{


card.addEventListener(
"click",
()=>{


openDemo(
card.dataset.demo
);


});


});







function openDemo(type){



const overlay =
document.createElement(
"div"
);



overlay.className =
"demo-overlay";




overlay.innerHTML = `


<div class="demo-window">


<button class="close-demo">

×


</button>



<div class="demo-browser">


<div class="demo-bar">

● ● ●

</div>



<div class="demo-content">


${loadDemo(type)}


</div>



</div>


</div>


`;





document.body.appendChild(
overlay
);



document.body.style.overflow =
"hidden";





setTimeout(()=>{


overlay.classList.add(
"active"
);


},50);






const close =
overlay.querySelector(
".close-demo"
);



close.onclick=()=>{


overlay.classList.remove(
"active"
);



setTimeout(()=>{


overlay.remove();


document.body.style.overflow =
"";


},500);



};




}









/* =========================
LOAD DEMOS
========================= */


function loadDemo(type){



if(type==="harrison"){

return harrisonDemo;

}



if(type==="amelia"){

return ameliaDemo;

}



if(type==="primeflow"){

return primeflowDemo;

}



}









/* =========================
CARD TILT
========================= */


const cards =
document.querySelectorAll(
".demo-card,.card"
);



cards.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


const box =
card.getBoundingClientRect();



const x =
e.clientX-box.left;


const y =
e.clientY-box.top;



const rotateX =
(y/box.height-.5)*8;


const rotateY =
(x/box.width-.5)*8;



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
BUTTON MAGNET EFFECT
========================= */


const buttons =
document.querySelectorAll(
".button"
);



buttons.forEach(button=>{


button.addEventListener(
"mousemove",
(e)=>{


const box =
button.getBoundingClientRect();


const x =
e.clientX-box.left-box.width/2;


const y =
e.clientY-box.top-box.height/2;



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
