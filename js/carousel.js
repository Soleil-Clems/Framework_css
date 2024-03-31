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
