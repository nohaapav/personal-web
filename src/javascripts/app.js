function preloader() {
    Pace.on('done', function () {
    });
}

function countdown() {
    let countDownDate = new Date("March 1, 2020 18:00:00").getTime();
    let x = setInterval(function () {

        let now = new Date().getTime();
        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timer-days").innerHTML = days;
        document.getElementById("timer-hr").innerHTML = hours;
        document.getElementById("timer-min").innerHTML = minutes;
        document.getElementById("timer-sec").innerHTML = seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "ONGOING";
        }
    }, 1000);
}

function menuHandler() {
    let hamburger = document.getElementById('hamburger');
    let hamburger_close = document.getElementById('hamburger-close');
    let navigation = document.getElementById('navigation');
    let overlay = document.getElementById('navigation-overlay');

    function open() {
        navigation.classList.add("nav-open");
        hamburger.classList.add("hidden");
        overlay.classList.add("nav-overlay-active");
    }

    function close() {
        navigation.classList.remove("nav-open");
        hamburger.classList.remove("hidden");
        overlay.classList.remove("nav-overlay-active");
    }

    hamburger.addEventListener('click', open);
    hamburger_close.addEventListener('click', close);
    overlay.addEventListener('click', close);

    document.querySelectorAll('.nav-menu-item').forEach(anchor => {
        anchor.addEventListener('click', close);
    });
}

function carousel() {
    let activeSlideIndex = 0;
    let slides = document.getElementsByClassName("carousel-slide");
    let activators = document.getElementsByClassName("carousel-activator");

    // Initialize slides
    Array.from(slides).forEach((e, i) => {
        if (i === 0) {
            e.style.opacity = "1";
        } else {
            e.style.opacity = "0";
        }
    });

    // Change slides
    function changeSlide(nextSlideIndex) {
        let activeSlide = slides[activeSlideIndex];
        let nextSlide = slides[nextSlideIndex];

        if (activeSlideIndex === (slides.length - 1) && nextSlideIndex === 0) {
            for (let i = 1; i < slides.length - 1; i++) {
                slides[i].style.transition = null;
                slides[i].style.opacity = "0";
            }
            activeSlide.style.opacity = "0";
        } else if (nextSlideIndex > activeSlideIndex) {
            nextSlide.style.transition = "opacity 1s ease-in-out";
            nextSlide.style.opacity = "1";
        } else {
            activeSlide.style.transition = "opacity 1s ease-in-out";
            activeSlide.style.opacity = "0";
            nextSlide.style.transition = null;
            nextSlide.style.opacity = "1";
        }
        activeSlideIndex = nextSlideIndex;
    }

    document.querySelectorAll('.carousel-activator').forEach((anchor, nextSlideIndex) => {
        anchor.addEventListener('change', () => {
            changeSlide(nextSlideIndex);
        });
    });

    let slider = setInterval(() => {
        let nextSlideIndex;
        if (activeSlideIndex === 3) {
            nextSlideIndex = 0;
        } else {
            nextSlideIndex = activeSlideIndex + 1
        }
        activators[nextSlideIndex].checked = true;
        changeSlide(nextSlideIndex);
    }, 9000);
}

document.addEventListener("DOMContentLoaded", function () {
    preloader();
    menuHandler();
    carousel();
});

window.addEventListener("scroll", function () {
    let appbar = document.getElementById("appbar");
    if (window.scrollY === 0) {
        appbar.classList.remove("nav-scrolled");
    } else {
        appbar.classList.add("nav-scrolled");
    }
});