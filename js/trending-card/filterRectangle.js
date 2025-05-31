export default function FilterRectangle(){

    const filter_label = document.querySelector('.s-filter');
    const rect_label = document.querySelector('.filter-rectangle');
    const filter_arrow = document.querySelector('.arrow img');


    filter_label.addEventListener('click', ()=>{

        rect_label.classList.toggle('hidden');
        
        if (rect_label.classList.contains('hidden')) {
            filter_arrow.style.transform = "rotate(0deg)";
        } else {
            filter_arrow.style.transform = "rotate(180deg)";
        }
    });

}