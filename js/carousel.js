// document.addEventListener("DOMContentLoaded", function() {
//     let slideIndex = 0;
//     showSlides();

//     function showSlides() {
//         const slides = document.querySelectorAll('.carousel-item');
//         const dots = document.querySelectorAll('.carousel-indicator');

//         for (let i = 0; i < slides.length; i++) {
//             slides[i].style.display = "none";  
//         }

//         slideIndex++;

//         if (slideIndex > slides.length) {
//             slideIndex = 1;
//         }    

//         for (let i = 0; i < dots.length; i++) {
//             dots[i].className = dots[i].className.replace(" active", "");
//         }

//         slides[slideIndex - 1].style.display = "block";  
//         dots[slideIndex - 1].className += " active";

//         setTimeout(showSlides, 2000); // Change image every 2 seconds
//     }
// });
document.addEventListener('DOMContentLoaded', function () {

    const dropdownBtns = document.querySelectorAll('.dropdown-btn');
let i=0
    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const dropdownContent = this.nextElementSibling;
            dropdownContent.classList.toggle('show');
        });
    });


    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('shows');
        console.log(navLinks);
    });
});