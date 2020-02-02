import scrollSpy from 'simple-scrollspy'

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

function menuItemClick() {
    document.getElementById("hamburger").checked = false;
    document.getElementById('hamburger-icon').classList.remove("is-active");
}

function menuItemTrigger() {
    document.querySelectorAll('.nav-menu-item').forEach(anchor => {
        anchor.addEventListener('click', menuItemClick);
    });
}

function hamburgerIcon() {
    let hamburger = document.getElementById('hamburger');
    hamburger.addEventListener('change', (event) => {
        let hamburgerIcon = document.getElementById('hamburger-icon');
        if (event.target.checked) {
            hamburgerIcon.classList.add("is-active");
        } else {
            hamburgerIcon.classList.remove("is-active");
        }
    });
}

function smoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            let elementId = this.getAttribute('href').substr(1);
            let element = document.getElementById(elementId);
            let elementPosition = element.getBoundingClientRect().top;

            window.scrollTo({
                top: elementPosition - 72,
                behavior: "smooth"
            });
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    preloader();
    countdown();
    menuItemTrigger();
    hamburgerIcon();
    smoothScrolling();
});

window.addEventListener("scroll", function () {
    let navigation = document.getElementById("navigation");
    if (window.scrollY === 0) {
        navigation.classList.remove("nav-scrolled");
    } else {
        navigation.classList.add("nav-scrolled");
    }
});

window.onload = function () {
    scrollSpy('#menu', {
        offset: 72 + 1
    });
};
