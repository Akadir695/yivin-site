// Select the navbar element from the DOM
const navbar = document.querySelector('.navbar')
const btnTop = document.getElementById('to-top')
// Function to handle scroll events
const scrollEvent = () => {
  if (window.scrollY > 50) { // If the page has been scrolled down more than 50 pixels
    navbar.classList.add('bg-light') // Add 'bg-dark' class to make the background dark
    navbar.classList.add('nav-sticky') // Add 'nav-sticky' class (with opacity and shadow)
    btnTop.classList.add('show') // Add 'bg-dark' class to make the background dark
   
  } 

  else { // If the page is scrolled back up to the top (less than 50 pixels)
    navbar.classList.remove('bg-light') // Remove the 'bg-dark' class
    navbar.classList.remove('nav-sticky') // Remove the 'nav-sticky' class
    btnTop.classList.remove('show') // Add 'bg-dark' class to make the background dark
  }
}
const btnBody = () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
// Function to add the scroll event listener to the window
const UserScroll = () => {
  window.addEventListener('scroll', scrollEvent) // Trigger the scrollEvent function when the user scrolls
  
}
const scrollToBody = () => {
window.addEventListener('click', btnBody)
}
scrollToBody()


UserScroll()



// Function to increment the counters
const incrementStats = () => {
  const counterStats = document.querySelectorAll(".counter");
  counterStats.forEach((item) => {
    item.innerText = 0;

    const updateCounter = () => {
      const target = +item.getAttribute('data-target');
      // target = 328
      const number = +item.innerText;
      const increment = target / 200;
      // every time we increment 328 / 200 = 1.64 that is equal to  2, our first increment is 2 then 4 then 6 then

      if (number < target) {
        item.innerText = Math.ceil(number + increment);
        // and we do it in  1s meaning we add 2   each second to number we have le
        setTimeout(updateCounter, 100); 
      } else {
        item.innerText = target;
      }
    };

    updateCounter();
  });
};

// Run incrementStats after DOM content is loaded
window.addEventListener('DOMContentLoaded', incrementStats);

