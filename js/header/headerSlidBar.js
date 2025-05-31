export default function headerSlideBar(){

    const r_arrow_btn = document.querySelector('.arrow-r');
    const l_arrow_btn = document.querySelector('.arrow-l');
    const imgs = document.querySelectorAll('.image');
    const header_bg = document.querySelector('header');
    const progressBar  = document.querySelector('.progress');


    let step_active = 1;
    r_arrow_btn.addEventListener('click', next_a);
    l_arrow_btn.addEventListener('click', previous_a);

    function updateSlide(index) {
        imgs.forEach(img => img.classList.remove('img-active'));
        imgs[index].classList.add('img-active');
        header_bg.style.backgroundImage = `url(${imgs[index].src})`;

        // progress bar
        const progressPercent = ((index + 1) / imgs.length) * 100;
        progressBar.style.width = `${progressPercent}%`;
    }

    function next_a() {
        step_active = (step_active + 1) % imgs.length;
        updateSlide(step_active);
    }


    function previous_a() {
        step_active = (step_active - 1 + imgs.length) % imgs.length;
            updateSlide(step_active);
    }

    imgs.forEach((img, index) => {
        img.addEventListener('click', () => {
            step_active = index;
            updateSlide(index);
        });
    });

    updateSlide(step_active);

};