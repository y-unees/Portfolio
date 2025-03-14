// Collapse the Navbar when any links are clicked
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    const navbarCollapse = document.getElementById('navbarNav');
    const navbarToggler = document.querySelector('.navbar-toggler');

    if (navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }

    // Get the target section's ID from the link's href attribute
    const target = document.querySelector(link.getAttribute('href'));

    window.scrollTo({
      top: target.offsetTop - document.querySelector('.navbar').offsetHeight,
      behavior: 'smooth'
    });
    e.preventDefault();
  });
});

// Collapse the navbar when the "Get in Touch" button is pressed
document.querySelector('.custom-btn').addEventListener('click', () => {
  const navbarCollapse = document.getElementById('navbarNav');
  const navbarToggler = document.querySelector('.navbar-toggler');

  if (navbarCollapse.classList.contains('show')) {
    navbarToggler.click();
  }
});

// Navbar Border when scrolling
document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Back to top button 
var mybutton = document.getElementById("backToTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none"; 
  }
};

// Browsers:
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, etc.
}
