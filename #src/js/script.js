window.addEventListener('DOMContentLoaded', function () {
    burgerAnimation();
    bg();
    swiperTop();
    swiperBottom();
    scrollPage();
})

const burgerAnimation = () => {
    const burger = document.querySelector('.mobile-content__burger-menu');
    const menu = document.querySelector('.header-footer');
    const body = document.querySelector('body');
    burger.onclick = () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('body-lock');
    }
}

const bg = () => {
    document.querySelectorAll(".ibg").forEach(el => {
        if (el.querySelector('img')) {
            el.style.backgroundImage = 'url(' + el.querySelector('img').getAttribute('src') + ')';
            el.querySelector('img').style.display = 'none';
        }
    });
}

const swiperTop = () => {
    new Swiper('.top-slider__container', {
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
            formatFractionCurrent: addZero,
            formatFractionTotal: addZero,
        },
        slidesPerView: 1,
        slidesPerGroup: 1,
        autoplay: {
            delay: 3000,
        },
        preloadImages: false,
        lazy: {
            loadOnTransitionStart: false,
            loadPrevNext: true,
        },
    });
    function addZero(num) {
        return (num > 9) ? num : '0' + num;
    }
}
const swiperBottom = () => {
    new Swiper('.bottom-slider__slider', {
        navigation: {
            nextEl: '.bottom-slider__next',
            prevEl: '.bottom-slider__prev'
        },
        slidesPerView: 1,
        slidesPerGroup: 1,
        autoplay: {
            delay: 3000,
        },
        loop: true,
        preloadImages: false,
        lazy: {
            loadOnTransitionStart: false,
            loadPrevNext: true,
        },
    });
}

const scrollPage = () => {
    let scrollPosition;
    const header = document.querySelector('.header');
    const scrollChange = 1;

    const addClass = () => header.classList.add("hide")
    const removeClass = () => header.classList.remove("hide")

    window.addEventListener('scroll', function () {
        scrollPosition = window.scrollY;
        if (scrollPosition >= scrollChange) { addClass() }
        else { removeClass() }
    })
}




