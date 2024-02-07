// clock 
const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {

     let day = new Date();
     let hh = day.getHours() * 30;
     let mm = day.getMinutes() * deg;
     let ss = day.getSeconds() * deg;

     hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
     mn.style.transform = `rotateZ(${mm}deg)`;
     sc.style.transform = `rotateZ(${ss}deg)`;

})


// scroll animation 
// Get all the elements to animate
const elements = document.querySelectorAll('.animation');

// Create a new Intersection Observer and apply the callback function
const observer = new IntersectionObserver((entries) => {
     entries.forEach((entry) => {
          if (entry.isIntersecting) {
               entry.target.classList.add('scroll-animation')
          }
     })
})

// Start observing for each element
for (let i = 0; i < elements.length; i++) {
     observer.observe(elements[i]);
} 

