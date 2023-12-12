// script.js
function showapp(event) {
   event.preventDefault();
   var appoverlay= document.getElementById("app-overlay");
 
	
   appoverlay.style.display = "block";
}


function remove(){
   var appoverlay= document.getElementById("app-overlay");
 
	
   appoverlay.style.display = "none";

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
            dynamicBullets: true, // Enable dynamic bullets
            spaceBetween: 10, // Adjust the space between bullets
        },
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('appointment-form');

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    try {
      const response = await fetch('http://localhost:3000/submit-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
      });

      const result = await response.json();
      console.log(result);//debugging and verifying that the server is handling requests as expected.

      // Optionally, reset the form after successful submission
      form.reset();
    } catch (error) {
      console.error('Error submitting appointment:', error);
    }
  });
});
