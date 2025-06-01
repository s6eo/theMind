
export default function card(items){

    const cardsComponint = document.querySelector('.category');

    const {title, views, btn1, btn2,game_img } = items
    const htmlCode =
        `
        <div class="card Scard">
                <div class="L-R-Arrow flex flex-item-center gap-10">
                    <div class="cursor"><img src="../img/icon/L-arrow.svg" alt=""></div>
                    <div class="cursor"><img src="../img/icon/R-arrow.svg" alt=""></div>
                </div>
            <div class="G-img" style=" background: url(${game_img}); background-position: center; background-size: cover; "></div>
            <div class="details flex flex-column gap-20">
                <div class="title flex flex-column gap-6">

                    <div calss="buttoms-sm" style="display: flex; gap:10px; ">
                        <div class="btn-sm">${btn1}</div>
                        <div class="btn-sm">${btn2}</div>
                    </div>

                    <h6>${title}</h6>

                    <div class="views flex flex-item-center gap-10">
                        <div class="point"></div>
                        <p>${views}</p>
                    </div>
                </div>
                <button class="btn"> Follow</button>
            </div>
        </div>
        `
        cardsComponint.insertAdjacentHTML('afterbegin', htmlCode);

};