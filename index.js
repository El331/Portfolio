

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

console.log("hello")
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(Links => {
        Links.classList.remove('active');
        document.querySelectorAll('header nav a[href*=' + id + ']').classList.add('actice'); 
      });
    }
  });

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);
};

// =============scroll reveal==================
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });

// var btn_message = document.getElementById('btn_message');
// btn_message.addEventListener('click', function(e){
//   e.preventDefault()
//   console.log('hi');
// })
