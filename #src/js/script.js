window.addEventListener('DOMContentLoaded', function () {
    burgerAnimation();
})

const burgerAnimation = () => {
    const burger = document.querySelector('.mobile-content__burger-menu');
    const menu = document.querySelector('.header-footer');
    burger.onclick = () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    }
}



