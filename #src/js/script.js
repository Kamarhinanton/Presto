window.addEventListener('DOMContentLoaded', function () {
    burgerAnimation();
    bg();
    swiperTop();
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
        // autoplay: {
        //     delay: 3000,
        // },
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



