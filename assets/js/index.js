const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const header = document.querySelector('header');
const menuBg = document.querySelector('.menu-bg');
const headerBody = document.querySelector('.header-body');


document.addEventListener('DOMContentLoaded', function () {
    burger.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    menuBg.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    document.querySelectorAll('.menu-list li a').forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    function openMenu() {
        menu.classList.add('active');
        burger.classList.add('active');
        header.classList.add('active');
        menuBg.classList.add('active');
        headerBody.classList.add('active');


    }

    function closeMenu() {
        menu.classList.remove('active');
        burger.classList.remove('active');
        header.classList.remove('active');
        menuBg.classList.remove('active');
        headerBody.classList.remove('active');

    }


});

window.addEventListener('scroll', function () {
    const headerTop = document.querySelector('header')


    if (window.scrollY > 0) {
        headerTop.classList.add('moved');

    } else {
        headerTop.classList.remove('moved');

    }
});

document.querySelectorAll('.faq-question').forEach((btn) => {
    btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        const icon = btn.querySelector('.icon');

        // Закрыть все
        document.querySelectorAll('.faq-answer').forEach((el) => {
            if (el !== answer) {
                el.classList.remove('open');
                // el.style.maxHeight = null;
            }
        });

        document.querySelectorAll('.faq-question .icon').forEach(i => {
            if (i !== icon) i.textContent = '+';
        });

        // Переключение текущего
        if (answer.classList.contains('open')) {
            answer.classList.remove('open');
            // answer.style.maxHeight = null;
            icon.textContent = '+';
        } else {
            answer.classList.add('open');
            // answer.style.maxHeight = answer.scrollHeight + "px";
            icon.textContent = '×';
        }
    });
});

document.querySelectorAll('.home-link ').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const swiperContainer = document.querySelector(".mySwiper");

    if (swiperContainer) {
        const swiper = new Swiper(".mySwiper", {
            loop: true,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 1.2,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 2.5,
                },
                1280: {
                    slidesPerView: 3,
                },
            },
        });
    }
});



document.addEventListener("DOMContentLoaded", () => {

    if (!localStorage.getItem("cookiesAccepted")) {
        document.getElementById("cookieNotice").style.display = "flex";

        document.getElementById("acceptCookies").addEventListener("click", function() {
            document.getElementById("cookieNotice").style.display = "none";
            localStorage.setItem("cookiesAccepted", "true");
        });
    }
});