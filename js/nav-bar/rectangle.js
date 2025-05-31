export default function rectangle(){

    const browse_lable = document.querySelector(".browse"); // BrowseBtn
    const notification_btn = document.querySelector('.notification'); // NotificationBtn
    const avatar_btn = document.querySelector('.avatar'); // AvatarBtn
    const ractBrowse_section = document.querySelector(".rect-browse");
    const notification_label = document.querySelector('.rect-notification');    
    const avatar_label = document.querySelector('.rect-avatar');  

    const close_btn = document.querySelector(".close-btn"); // closeBtnBrowse

    const active_list = document.querySelectorAll('.list');
    const arrow_label = document.querySelector('.browse-tool-box-container');


    // browse 
    browse_lable.addEventListener('click' , ()=> {
        notification_label.classList.add('hidden');
        avatar_label.classList.add('hidden');

        ractBrowse_section.classList.remove('hidden');
        arrow_label.style.transform = 'rotate(180deg)';
    });

    close_btn.addEventListener('click' , ()=>{
        ractBrowse_section.classList.add('hidden');
        arrow_label.style.transform = 'rotate(0deg)';
    });


    // active like hover 
    for(let i = 0 ; i< active_list.length; i++){
        active_list[i].addEventListener('click', active);
        function active(){
            removeAll();
            active_list[i].classList.add('active');
        };
    };

    function removeAll(){
        for(let i =0 ; i<active_list.length; i++){
            active_list[i].classList.remove('active');
        };
    };

    //notification
    notification_btn.addEventListener('click', ()=>{
        avatar_label.classList.add('hidden');
        ractBrowse_section.classList.add('hidden');
        notification_btn.style.background = 'var(--p-main-color)'

        notification_label.classList.contains('hidden') ? notification_btn.style.background = 'var(--p-main-color)' : notification_btn.style.background = '';
        
        notification_label.classList.toggle('hidden');
    });

    //avatar
    avatar_btn.addEventListener('click', ()=>{
        notification_label.classList.add('hidden');
        ractBrowse_section.classList.add('hidden');

        avatar_label.classList.toggle('hidden');
    });

};