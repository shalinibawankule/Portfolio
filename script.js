// Selecting form and message element
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

// Event listener for form submission
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // URL of the Google Sheets script where the form data should be submitted
    const scriptURL = "https://docs.google.com/spreadsheets/d/1l-q6Au1JSMWlBBN2N2PsC6JdHKb3hAAYHXJKn_b9jqg/edit?usp=sharing";

    // Fetch to submit form data to Google Sheets script URL
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            // If the response is successful, display a success message
            msg.innerHTML = "Message sent successfully";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            form.reset(); // Reset form fields after successful submission
        })
        .catch((error) => console.error("Error!", error.message)); // Log any errors that occur during form submission
});

// Other existing code...
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.screenY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    //reset:true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['Etx Student at MIT AOE', 'Full Stack developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
