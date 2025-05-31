export default function navMedia(burgerIcon) {
    
    const navBarMedia = document.querySelector('nav');
    const main = document.querySelector('main');

    function handleBurgerClick() {
        navBarMedia.classList.toggle('show');
        navBarMedia.classList.toggle('hidden');
        main.classList.toggle('hidden', !navBarMedia.classList.contains('hidden'));
    }

    function checkScreenSize() {
        if (window.innerWidth <= 426) {
            burgerIcon.addEventListener('click', handleBurgerClick);

        } else {
            navBarMedia.classList.remove('hidden');
            burgerIcon.removeEventListener('click', handleBurgerClick);
        }
    }

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
}