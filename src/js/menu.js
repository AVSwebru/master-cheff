export default function(menuBtn, menu) {

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('header-menu-btn_isOpened');
        menu.classList.toggle('nav_isOpened');
    });

}