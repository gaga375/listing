(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()


  const hamburger = document.getElementById("3line");
const navLinks = document.getElementById("page");

// Toggle menu on hamburger click
hamburger.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent click from bubbling up
  navLinks.classList.toggle("hidden");
});

// Hide menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.add("hidden");
  }
});
 
let searchicon = document.getElementById("searchicon");
let searchgagan = document.getElementById("searchgagan");

// Show on click
searchicon.addEventListener("click", (e) => {
  e.stopPropagation();

  if (searchgagan.classList.contains("hidden")) {
    searchgagan.classList.remove("hidden");
    setTimeout(() => {
      searchgagan.classList.remove("opacity-0", "scale-95");
      searchgagan.classList.add("opacity-100", "scale-100");
    }, 10); // Small delay to allow transition
  } else {
    searchgagan.classList.remove("opacity-100", "scale-100");
    searchgagan.classList.add("opacity-0", "scale-95");
    setTimeout(() => {
      searchgagan.classList.add("hidden");
    }, 300); // Match with duration-300
  }
});

// Hide on outside click
document.addEventListener("click", (e) => {
  if (!searchicon.contains(e.target) && !searchgagan.contains(e.target)) {
    searchgagan.classList.remove("opacity-100", "scale-100");
    searchgagan.classList.add("opacity-0", "scale-95");
    setTimeout(() => {
      searchgagan.classList.add("hidden");
    }, 300);
  }
});
