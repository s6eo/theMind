
export default function cards(item){

    const TrendingCardSection = document.querySelector('.cards-container');
    const {Number, Title, img} = item;


    const htmlCode = 
        `
                <div class="card-container flex flex-item-center gap-30">
                    <div class="card-img" style="background:url(${img}); background-size:cover;"></div>

                    <div class="num flex flex-justify-center flex-item-center">${Number}</div>
                    <div class="title flex flex-column gap-20">
                        <div class="details flex flex-column flex-justify-start gap-6">
                            <div class="button flex flex-item-center flex-justify-start gap-6" >
                            <button class="btn-sm flex flex-item-center flex-justify-center gap-5">
                            <img src="/img/icon/live-w.svg" alt="">
                                live
                            </button>
                            <button class="btn-sm2">shooter</button>
                        </div>

                        <h6>${Title}</h6>

                        <div class="view flex flex-item-start gap-10">
                            <div class="watching flex flex-item-center flex-justify-center gap-6">
                                <div class="point"></div>
                                <p>4.2K watching</p>
                            </div>

                            <div class="time flex flex-item-center flex-justify-center gap-6">
                                <div class="point"></div>
                                <p>1 week ago</p>
                            </div>
                        </div>

                        </div>

                        <div class="avatar flex gap-10">
                            <img src="/img/following-img/img1.svg" alt="">
                            <div class="name-cont flex flex-column">
                                <div class="name flex flex-item-center gap-5">
                                    <h6>Gabriel Erickson </h6>
                                    <div class="valid flex flex-item-center flex-justify-center">
                                        <img class="valid-img" src="/img/icon/validation-icon-w.svg" alt="">
                                    </div>
                                </div>
                                <p>call of Duty</p>
                            </div>
                        </div>
                    </div>

                    <div class="card-hove flex flex-column flex-justify-center flex-item-center">
                        <a href="" class="flex flex-item-center flex-justify-center"><img src="/img/icon/share.svg" alt=""></a>
                        <a href="live.html" class="flex flex-item-center flex-justify-center"><img src="/img/icon/video-share.svg" alt=""></a>
                        <a href="" class="flex flex-item-center flex-justify-center"><img src="/img/icon/favorite-share.svg" alt=""></a>
                    </div>
                </div>
        
        `

    TrendingCardSection.insertAdjacentHTML('afterbegin',htmlCode);
 
};