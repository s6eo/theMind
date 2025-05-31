export default function caedComponint(items){
    const cardContainer = document.querySelector('.live-cards');

    const {title, user_name, user_img, game_name, img} = items;


    const htmlCode = 
        `
            <div class="card flex flex-column flex-justify-between">
                <div class="top flex flex-column flex-item-center flex-justify-center">
                    <div class="img" style="background: url(${img}); background-size: cover; background-position: left;"></div>
                    <div class="discription flex flex-column ">
                        <h6>${title}</h6>
                        <div class="user">
                            <div class="img flex flex-item-center  gap-10">
                                <img src="${user_img}" alt="avatar2">
                                <div class="user-name">
                                    <div class="name flex flex-item-center gap-5">
                                        <h6>${user_name}</h6>
                                        <div class="validation-user flex flex-item-center flex-justify-center">
                                            <img src="/img/icon/valid-r.svg" alt="" class="valid">
                                        </div>
                                    </div>
                                    <div class="game-name">${game_name}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom flex flex-item-center flex-justify-around">
                    <div class="btn-sm">
                        <img src="/img/icon/live-w.svg" alt="white wifi">
                        <p>Live</p>
                    </div>
                    <div class="watchig flex flex-item-center flex-justify- gap-5">
                        <div class="blue-point"></div>
                        <p>4.2K watching</p>
                    </div>
                </div>
            </div>
        
        `


    cardContainer.insertAdjacentHTML("afterbegin", htmlCode);

};