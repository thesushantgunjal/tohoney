
// Owlcarousel in jquery
$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
      	loop:true,
    	margin:10,
	    nav:true,
	    autoplay:true,
	    autoplayTimeout:3000,
	    autoplayHoverPause:true,
	    center: true,
	    navText: [
        	"<i class='fa fa-angle-left'></i>",
        	"<i class='fa fa-angle-right'></i>"
    	],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
  });
});

// //countdown timer in javascript
// function countdown(){
//     var now = new Date();
//     var eventDate = new Date(2022, 6, 25);

//     var currentTime = now.getTime();
//     var eventTime = eventDate.getTime();

//     var remTime = eventTime - currentTime;

//     var s = Math.floor(remTime / 1000);
//     var m = Math.floor(s / 60);
//     var h = Math.floor(m / 60);
//     var d = Math.floor(h / 24);

//     h %= 24;
//     m %= 60;
//     s %= 60;

//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     s = (s < 10) ? "0" + s : s;

//     document.getElementById("days").textContent = d;
//     document.getElementById("days").innerText = d;

//     document.getElementById("hours").textContent = h;
//     document.getElementById("mins").textContent = m;
//     document.getElementById("secs").textContent = s;

//     setTimeout(countdown, 1000);
// }





// //countdown timer in javascript
// // const months = document.getElementById('months');
// const days = document.getElementById('days');
// const hours = document.getElementById('hours');
// const mins = document.getElementById('mins');
// const secs = document.getElementById('secs');

// const currentYear = new Date().getFullYear();

// //counter time limite set
// const newTime = new Date('January 01 ${currentYear + 1} 00:00:00');


// //update countdown timer
// function updateCountdown(){

// //current time
// const now = new Date();
// const diff = newTime - now;

// const day = Math.floor(diff / 1000 / 60 / 60 / 24);
// const hour = Math.floor(diff / 1000 / 60 / 60) %24;
// const min = Math.floor(diff / 1000 / 60) % 60;
// const sec = Math.floor(diff / 1000) % 60;

// //print conter in html
// days.innerHTML = day;
// hours.innerHTML = hour < 10 ? '0' + hour : hour;
// mins.innerHTML = min < 10 ? '0' + min : min;
// secs.innerHTML = sec < 10 ? '0' + sec : sec;
// }
// setInterval(updateCountdown, 1000);
