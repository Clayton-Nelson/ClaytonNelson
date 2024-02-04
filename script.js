document.addEventListener('DOMContentLoaded', function () {
    var profileContainer = document.querySelector('.profile-container');
    var profileContainer2 = document.querySelector('.profile-container2');
    var section = document.querySelector('#section');
    var scroll = document.querySelector('#scroll-to-top');
    var isHalfScreen = false;

    window.addEventListener('scroll', function () {
        var profileRect = profileContainer.getBoundingClientRect();

        if (profileRect.bottom < 0 && !isHalfScreen) {
            profileContainer.classList.add('half-screen');
            profileContainer2.classList.add('half-screen2');
            section.classList.add('half-screen');
            scroll.classList.add('half-screen');
            isHalfScreen = true;
        } else if (profileRect.bottom >= 0 && isHalfScreen) {
            profileContainer.classList.remove('half-screen');
            profileContainer2.classList.remove('half-screen2');
            section.classList.remove('half-screen');
            scroll.classList.remove('half-screen');
            isHalfScreen = false;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var scrollToTopButton = document.getElementById('scroll-to-top');

    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});