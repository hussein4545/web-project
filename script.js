// script.js
function showLogin(event) {
   event.preventDefault();
   var loginOverlay = document.getElementById("loginOverlay");
   var registrationOverlay = document.getElementById("registrationOverlay");
 
   loginOverlay.style.display = "block";
   registrationOverlay.style.display = "none";}

function showregistration(event){
  event.preventDefault();
  var loginOverlay = document.getElementById("loginOverlay");
  var registrationOverlay = document.getElementById("registrationOverlay");

  loginOverlay.style.display = "none";
  registrationOverlay.style.display = "block";


}
function remove(){
  var loginOverlay = document.getElementById("loginOverlay");
  var registrationOverlay = document.getElementById("registrationOverlay");
  loginOverlay.style.display = "none";
  registrationOverlay.style.display = "none";



}
/*-services--*/
var swiperServices = new Swiper(".mySwiperservices", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        700: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});


/*--testimonials--*/
var swiperTesti = new Swiper(".mySwipertesti", {
    pagination: {
        el: ".swiper-pagination",
    },
});
document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.mySwiperteam', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const appointmentForm = document.getElementById('appointmentForm');

    appointmentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Add your logic to handle form submission
        // You can access form fields using: 
        // const fullName = document.getElementById('fullName').value;
        // const email = document.getElementById('email').value;
        // const doctor = document.getElementById('doctor').value;
        // const appointmentDate = document.getElementById('appointmentDate').value;

        // Perform necessary actions (e.g., send data to server, show confirmation)
    });
});
