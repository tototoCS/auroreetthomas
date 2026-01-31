document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Countdown Timer
    const weddingDate = new Date('July 11, 2026 14:00:00').getTime();

    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const gap = weddingDate - now;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        if (document.querySelector(".day")) {
            document.querySelector(".day").innerText = textDay;
            document.querySelector(".hour").innerText = textHour;
            document.querySelector(".minute").innerText = textMinute;
            document.querySelector(".second").innerText = textSecond;
        }

        if (gap < 0) {
            clearInterval(countdown);
            // Handle wedding started
        }
    }, 1000);
});
