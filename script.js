// ================================
// SCROLL REVEAL ANIMATIONS
// ================================


const revealElements = document.querySelectorAll(".reveal");


const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }


    });


},{
    threshold:0.15
});



revealElements.forEach(el=>{

    observer.observe(el);

});







// ================================
// AI CHAT TYPING EFFECT
// ================================


const aiMessage = document.querySelector(".ai");


const aiText = 
`AI Assistant:
\n"Absolutely. I have 10:30 AM available.
Would you like me to reserve it?"`;



if(aiMessage){


let index = 0;


aiMessage.innerHTML="";


function typeAI(){


    if(index < aiText.length){


        aiMessage.innerHTML += aiText.charAt(index);


        index++;


        setTimeout(typeAI,35);


    }


}


setTimeout(typeAI,1500);


}








// ================================
// FLOATING MOUSE EFFECT
// ================================


const windowBox = document.querySelector(".ai-window");


document.addEventListener("mousemove",(e)=>{


if(windowBox){


const x = (window.innerWidth/2 - e.clientX)/50;

const y = (window.innerHeight/2 - e.clientY)/50;



windowBox.style.transform =
`
rotateY(${x}deg)
rotateX(${y}deg)
`;



}


});








// ================================
// NUMBER COUNTER ANIMATION
// ================================


const counters = document.querySelectorAll(".counter");


counters.forEach(counter=>{


let started=false;



const countObserver = new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting && !started){


started=true;


let text = counter.innerText;



if(text.includes("%")){


let num=0;


let target=parseInt(text);


let interval=setInterval(()=>{


num++;


counter.innerText=num+"%";


if(num>=target){

clearInterval(interval);

}


},25);



}





else if(text.includes("+")){


let num=0;

let target=parseInt(text);



let interval=setInterval(()=>{


num++;


counter.innerText=num+"+";


if(num>=target){

clearInterval(interval);

}


},70);


}



}


});


});



countObserver.observe(counter);



});








// ================================
// MAGNETIC BUTTONS
// ================================


const buttons = document.querySelectorAll(
".primary-btn, .secondary-btn, .nav-button, form button"
);



buttons.forEach(button=>{


button.addEventListener("mousemove",(e)=>{


const rect = button.getBoundingClientRect();


const x = e.clientX - rect.left - rect.width/2;

const y = e.clientY - rect.top - rect.height/2;



button.style.transform =
`translate(${x/8}px,${y/8}px)`;


});



button.addEventListener("mouseleave",()=>{


button.style.transform="translate(0,0)";


});


});








// ================================
// AI DASHBOARD LIVE UPDATES
// ================================


const successBox=document.querySelector(".success");



const updates=[

"✓ Appointment booked automatically",

"✓ Customer information captured",

"✓ Follow-up message sent",

"✓ Lead converted successfully"

];



let updateIndex=0;



if(successBox){


setInterval(()=>{


successBox.style.opacity=0;



setTimeout(()=>{


successBox.innerText=
updates[updateIndex];



successBox.style.opacity=1;



updateIndex++;


if(updateIndex>=updates.length){

updateIndex=0;

}



},500);



},3000);



}








// ================================
// SMOOTH NAVIGATION
// ================================


document.querySelectorAll('a[href^="#"]')
.forEach(link=>{


link.addEventListener("click",function(e){


const target=document.querySelector(
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








// ================================
// CONTACT FORM SUCCESS
// ================================


const form=document.querySelector("form");



if(form){


form.addEventListener("submit",()=>{


const button=form.querySelector("button");



button.innerHTML=
"Sending enquiry...";



setTimeout(()=>{


button.innerHTML=
"✓ Request Received";


},1500);



});

}
