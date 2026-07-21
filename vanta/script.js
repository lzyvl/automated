/* =========================
VANTA — SCRIPT.JS
========================= */


/* =========================
NAVBAR EFFECT
========================= */


const navbar = document.querySelector(".navbar");


window.addEventListener("scroll",()=>{


if(window.scrollY > 50){

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


navbar.style.borderBottom =
"none";


}


});







/* =========================
SMOOTH SCROLL
========================= */


document.querySelectorAll('a[href^="#"]')
.forEach(link=>{


link.addEventListener("click",(e)=>{


const target =
document.querySelector(
link.getAttribute("href")
);



if(target){

e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});


});









/* =========================
REVEAL ANIMATION
========================= */


const revealItems =
document.querySelectorAll(
".card, .demo-card, .price-card"
);



const reveal = ()=>{


revealItems.forEach(item=>{


const position =
item.getBoundingClientRect().top;


if(position <
window.innerHeight - 100){


item.style.opacity="1";


item.style.transform=
"translateY(0)";


}


});


};



reveal();


window.addEventListener(
"scroll",
reveal
);





revealItems.forEach(item=>{


item.style.opacity="0";


item.style.transform=
"translateY(50px)";


item.style.transition=
"all .8s ease";


});









/* =========================
MOUSE GLOW
========================= */


const cursorGlow =
document.createElement("div");


cursorGlow.className =
"cursor-glow";


document.body.appendChild(cursorGlow);



const glowStyle =
document.createElement("style");


glowStyle.innerHTML=`

.cursor-glow{

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


filter:blur(20px);


z-index:-1;


}


`;


document.head.appendChild(glowStyle);




document.addEventListener(
"mousemove",
(e)=>{


cursorGlow.style.left =
e.clientX+"px";


cursorGlow.style.top =
e.clientY+"px";


});









/* =========================
DEMO VIEWER SYSTEM
========================= */


const demoCards =
document.querySelectorAll(".demo-card");



demoCards.forEach(card=>{


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
document.createElement("div");



overlay.className =
"demo-overlay";




overlay.innerHTML = `

<div class="demo-window">


<button class="close-demo">

✕
</button>



<div class="demo-browser">


<div class="demo-bar">

● ● ●

</div>



<div class="demo-content">


${getDemo(type)}


</div>



</div>


</div>

`;





document.body.appendChild(
overlay
);



document.body.style.overflow=
"hidden";




setTimeout(()=>{

overlay.classList.add(
"active"
);


},50);





overlay.querySelector(
".close-demo"
)

.onclick=()=>{


overlay.classList.remove(
"active"
);



setTimeout(()=>{


overlay.remove();


document.body.style.overflow=
"";


},400);



};



}









/* =========================
DEMO CONTENT
========================= */


function getDemo(type){


if(type === "harrison"){

return harrisonDemo;

}



if(type === "amelia"){

return ameliaDemo;

}



if(type === "primeflow"){

return primeflowDemo;

}


}


if(type==="harrison"){


return `

<div class="demo-site barber">


<h1>
Harrison & Co.
</h1>


<p>
Premium grooming tailored for you.
</p>


<button>
Book Appointment
</button>


<hr>


<h2>
Our Services
</h2>


<p>
Haircuts • Beard Styling • Packages
</p>



<h2>
Customer Reviews
</h2>


<p>
★★★★★ Amazing service</p>


</div>

`;

}




if(type==="amelia"){


return `


<div class="demo-site beauty">


<h1>
Amelia Rose Studio
</h1>


<p>
Luxury beauty & aesthetics.
</p>


<button>
Book Treatment
</button>


<hr>


<h2>
Treatments</h2>


<p>
Facials • Nails • Aesthetics
</p>



<h2>
Reviews</h2>


<p>
★★★★★ Beautiful experience</p>


</div>


`;

}





if(type==="primeflow"){


return `


<div class="demo-site trade">


<h1>
PrimeFlow Services
</h1>


<p>
Reliable home services when you need them.
</p>


<button>
Request Quote
</button>


<hr>


<h2>
Our Services</h2>


<p>
Repairs • Installation • Maintenance
</p>



<h2>
Trusted Service</h2>


<p>
★★★★★ Professional & reliable</p>



</div>


`;


}



}









/* =========================
DEMO POPUP CSS
========================= */


const demoCSS =
document.createElement("style");


demoCSS.innerHTML=`

.demo-overlay{


position:fixed;


inset:0;


background:

rgba(0,0,0,.85);



backdrop-filter:blur(20px);



display:flex;


align-items:center;


justify-content:center;



opacity:0;



transition:.5s;



z-index:9999;


}



.demo-overlay.active{


opacity:1;


}




.demo-window{


width:90%;


height:85%;


transform:scale(.85);


transition:.5s;


}



.demo-overlay.active .demo-window{


transform:scale(1);


}





.close-demo{


position:absolute;


top:40px;


right:50px;


background:none;


border:none;


color:white;


font-size:30px;


cursor:pointer;


}





.demo-browser{


height:100%;


background:white;


border-radius:25px;


overflow:hidden;


color:black;


}



.demo-bar{


height:40px;


background:#ddd;


padding:10px;


}



.demo-content{


height:calc(100% - 40px);


overflow-y:auto;


padding:60px;


}




.demo-site{


max-width:800px;


margin:auto;


font-family:Inter,sans-serif;


}




.demo-site h1{


font-size:70px;


margin-bottom:20px;


}



.demo-site p{


font-size:22px;


margin:25px 0;


}




.demo-site button{


padding:15px 30px;


border-radius:30px;


border:none;


background:black;


color:white;


}



`;



document.head.appendChild(
demoCSS
);
