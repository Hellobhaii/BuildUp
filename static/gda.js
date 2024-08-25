const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// swiper
document.addEventListener("DOMContentLoaded", function() {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination'
    },

    // Disable navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

    // Autoplay
    autoplay: {
      enabled: true,
      delay: 2000, // delay between slides in milliseconds
      disableOnInteraction: false // disable autoplay on user interaction
    }
  });

  // Initialize autoplay
  swiper.autoplay.start();

  // Hide arrow elements
  const arrowElements = document.querySelectorAll('.swiper-button-next, .swiper-button-prev');
  arrowElements.forEach((element) => {
    element.style.display = 'none';
  });
});


// Add JavaScript to hide loading animation when page is loaded
window.addEventListener("load", function () {
  setTimeout(function () {
      document.querySelector(".loading").style.display = "none";
  }, 500);
});


// Add smooth scrolling to anchor links
document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.hash);
    if (target) { // Check if the target element exists
      event.preventDefault();
      const navbar = document.querySelector(".navbar");
      const offset = navbar ? navbar.offsetHeight : 0;
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: "smooth"
      });
    }
  });
});

//learn more
document.querySelectorAll('.learn-more').forEach(button => {
  button.addEventListener('click', () => {
    // Add your action here, for example:
    alert('Learn more about our services!');
  });
});