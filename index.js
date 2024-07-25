// Time and date
`use strict`;
function refreshTime() {
    const timeDisplay = document.getElementById("time");
    // const dateString = new Date().toLocaleString();
    const dateString = new Date().toLocaleString(undefined, { timeZone: 'US/Central' });
    const formattedString = dateString.replace(", ", " ");
    timeDisplay.textContent = formattedString;
}
setInterval(refreshTime, 1000);

// var s = new Date('2020-01-14T17:43:37.000Z').toLocaleString(undefined, { timeZone: 'Asia/Kolkata' });


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Preloader

var loader = document.getElementById("preloader")
window.addEventListener("load", ()=>{
    loader.style.display = "none"
})