(() => {
    const button = document.querySelector(".js-nav__mobile-button");
    const menu = document.querySelector(".js-nav__menu");

    const toggleClass = () => {
        menu.classList.toggle("nav__menu--open");
    };

    button.addEventListener("click", toggleClass);
    menu.addEventListener("click", toggleClass);
})();