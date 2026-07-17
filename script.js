// Smooth scroll for buttons/links

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});




// Fade-in animations on scroll

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});



document.querySelectorAll("section, .service-card, .price-card, .cards div, .faq-item")
.forEach(element=>{

    element.classList.add("hidden");

    observer.observe(element);

});





// FAQ accordion

const faqItems = document.querySelectorAll(".faq-item");


faqItems.forEach(item=>{

    const question = item.querySelector("h3");
    const answer = item.querySelector("p");


    answer.style.display="none";


    question.style.cursor="pointer";


    question.addEventListener("click",()=>{


        if(answer.style.display==="none"){

            answer.style.display="block";

            question.innerHTML = "▲ " + question.innerHTML.replace("▼ ","");

        }

        else {

            answer.style.display="none";

            question.innerHTML = "▼ " + question.innerHTML.replace("▲ ","");

        }


    });


});





// Fake dashboard live activity animation

const dashboardCards = document.querySelectorAll(".dash-card");


const updates = [

"📞 New customer enquiry received",

"🤖 AI follow-up sent automatically",

"📅 Appointment booked",

"⭐ New 5-star review received"

];


let updateIndex=0;



setInterval(()=>{


    if(dashboardCards.length){

        dashboardCards[0].innerHTML = 
        updates[updateIndex] +
        "<br><span>Just now</span>";

        updateIndex++;

        if(updateIndex >= updates.length){

            updateIndex=0;

        }

    }


},3000);





// Simple enquiry form handling

const form = document.querySelector("form");


if(form){

form.addEventListener("submit",(e)=>{


    e.preventDefault();


    const button = form.querySelector("button");


    button.innerHTML="Sending...";


    setTimeout(()=>{


        button.innerHTML="✓ Enquiry Received";


        form.reset();


        alert(
        "Thanks! We will contact you shortly."
        );


    },1500);



});


}