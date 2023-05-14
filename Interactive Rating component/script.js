const bubbles = document.querySelectorAll(".radio");
const button = document.querySelector(".button");
const feedbackPage = document.querySelector(".feedback-page");
const thankYouPage = document.querySelector(".thank-you-page");
const starNumber = document.querySelector(".star-number");


var rating = 0;
bubbles.forEach((bubble)=>{
    bubble.addEventListener('click', ()=>{
            rating = bubble.innerText;
            console.log(rating);
    })
})

button.addEventListener('click', ()=>{
    if(rating>0){
        feedbackPage.style.display = "none";
        starNumber.innerHTML = "";
        starNumber.innerHTML = rating;
        thankYouPage.style.display = "flex";

    }
    
})