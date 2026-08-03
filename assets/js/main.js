/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- CLOSE MOBILE MENU AFTER CLICKING A LINK ----- */
document.querySelectorAll('.nav-link').forEach(function(link){
  link.addEventListener('click', function(){
    document.getElementById("myNavMenu").classList.remove("responsive");
  });
});

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
const navHeader = document.getElementById("header");

function headerShadow(){
  if(window.scrollY > 50){
    navHeader.classList.add("scrolled");
  } else {
    navHeader.classList.remove("scrolled");
  }
}
window.addEventListener("scroll", headerShadow);
headerShadow();

/* ----- TYPING EFFECT ----- */
new Typed(".typedText",{
  strings: ["Full Stack Developer", "Flutter Developer", "Backend Developer"],
  loop: true,
  typeSpeed: 90,
  backSpeed: 50,
  backDelay: 1800
});

/* ----- SCROLL REVEAL ANIMATION ----- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '40px',
  duration: 900,
  easing: 'ease-out',
  reset: false
});

/* -- HERO -- */
sr.reveal('.hero-text',{});
sr.reveal('.hero-terminal',{delay: 150});

/* -- HEADINGS -- */
sr.reveal('.top-header',{});

/* -- ABOUT -- */
sr.reveal('.about-card',{origin: 'left'});
sr.reveal('.about-info',{origin: 'right', delay: 100});
sr.reveal('.skills-box',{interval: 120});

/* -- SERVICES & PROCESS -- */
sr.reveal('.service-box',{interval: 120});
sr.reveal('.process',{delay: 100});
sr.reveal('.process-step',{interval: 120});

/* -- PROJECTS -- */
sr.reveal('.project-box',{interval: 150});

/* -- CONTACT -- */
sr.reveal('.contact-info',{origin: 'left'});
sr.reveal('.form-control',{origin: 'right', delay: 100});

/* ----- CHANGE ACTIVE LINK ----- */
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 80;
    const sectionId = current.getAttribute('id');
    const link = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
    if(!link) return;

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      link.classList.add('active-link');
    } else {
      link.classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);
scrollActive();
