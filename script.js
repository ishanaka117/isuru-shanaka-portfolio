/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICKING LINK
===================================================== */

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =====================================================
   TYPING EFFECT
===================================================== */

const typingElement = document.getElementById("typing");

const words = [
    "Supply Chains",
    "Shipping",
    "International Trade",
    "Data Analytics",
    "Logistics Operations",
    "Technology"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }

    }

    const speed = deleting ? 50 : 90;

    setTimeout(typeEffect, speed);
}


typeEffect();


/* =====================================================
   CURRENT YEAR
===================================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();
