/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}


  
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 50}); 
sr.reveal('.home__social-icon',{ interval: 100}); 
sr.reveal('.skills__data, .experience__content, .contact, .contact-form-container',{interval: 100}); 
document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Get form field values
    const nameInput = document.getElementById('name');
    const nameValue = nameInput.value.trim();
    
    const phoneInput = document.getElementById('phone');
    const phoneValue = phoneInput.value.trim();
    
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value.trim();
    
    const messageInput = document.getElementById('message');
    const messageValue = messageInput.value.trim();
    
    let valid = true; // Flag to track form validity

    // Validate Name (not empty)
    if (nameValue === '') {
        alert("Please enter your name.");
        valid = false;
    }

    // Validate Email (Basic pattern check)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailValue)) {
        alert("Please enter a valid email address.");
        valid = false;
    }

    // Validate Message (not empty)
    if (messageValue === '') {
        alert("Please enter a message.");
        valid = false;
    }

    // If any validation fails, prevent form submission
    if (!valid) {
        event.preventDefault();
    }
    form.reset();
});

