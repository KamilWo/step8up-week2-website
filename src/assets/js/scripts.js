document.addEventListener('DOMContentLoaded', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  const navList = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-list li a');

  // Toggle menu visibility when the hamburger icon is clicked
  mobileMenu.addEventListener('click', function() {
    navList.classList.toggle('active');
  });

  // Hide menu after clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (navList.classList.contains('active')) {
        navList.classList.remove('active');
      }
    });
  });

  // Button go to top
  let mybutton = document.getElementById("scroll-top-btn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
      } else {
          mybutton.style.display = "none";
      }
  }

  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener("click", function() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
});
