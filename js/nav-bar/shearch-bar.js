import rectangle from "./rectangle.js";


export default function searchBar(){

    const searchBarContainer = document.querySelector('.search-bar-container');

    const htmlCode = 
        `
            <div class="left flex flex-item-center flex-justify-start gap-60">
                <div class="burger-icon flex-column cursor">
                    <div></div>
                    <div></div>
                </div>
                <div class="browse flex flex-item-center gap-50 cursor">
                    <div class="text flex flex-item-center gap-20">
                        <img src="/img/icon/Browse.svg" alt="browse-img">
                        <h5>Browse</h5>
                    </div>
                    <div class="browse-tool-box-container flex flex-item-center flex-justify-center">
                        <img src="/img/icon/small-right.svg" alt="browse-tool-box">
                    </div>
                </div>
                <div class="search flex flex-item-center gap-20 cursor">
                    <img src="/img/icon/Search.svg" alt="search-img">
                    <div class="text-input">
                        <input type="search" name="" id="" placeholder="Search Everthing">
                    </div>
                </div>


                <!-- rectangle browse hidden -->
                <div class="rect-browse flex flex-column flex-item-center gap-5 hidden">
                    <div class="title flex flex-item-center flex-justify-around">
                        <div class="name flex flex-item-center gap-10">
                            <p>🎮</p>
                            <h5>Browse Games</h5>
                        </div>
                        <img src="/img/icon/close.svg" alt="closebtn" class="close-btn cursor">
                    </div>
                    <div class="playlist-drop flex flex-column flex-item-center">
                        <div class="list active ">
                            <img src="/img/imgs/Oval-brw1.svg" alt="">
                            <h6>League of Legends®</h6>
                        </div>
                        <div class="list">
                            <img src="/img/imgs/Oval-brw2.svg" alt="">
                            <h6>War Games</h6>
                        </div>
                        <div class="list">
                            <img src="/img/imgs/Oval-brw3.svg" alt="">
                            <h6>Fortnite®</h6>
                        </div>
                        <div class="list">
                            <img src="/img/imgs/Oval-brw1.svg" alt="">
                            <h6>League of Legends®</h6>
                        </div>
                        <div class="list">
                            <img src="/img/imgs/Oval-brw2.svg" alt="">
                            <h6>War Games</h6>
                        </div>
                        <div class="list">
                            <img src="/img/imgs/Oval-brw3.svg" alt="">
                            <h6>Fortnite®</h6>
                        </div>
                        <div class="list">
                            <img src="/img/imgs/Oval-brw1.svg" alt="">
                            <h6>League of Legends®</h6>
                        </div>
                        <div class="list">
                            <img src="/img/imgs/Oval-brw2.svg" alt="">
                            <h6>War Games</h6>
                        </div>
                        <div class="list">
                            <img src="/img/imgs/Oval-brw3.svg" alt="">
                            <h6>Fortnite®</h6>
                        </div>

                    </div>
                </div>

            </div>

            <div class="right flex flex-item-center flex-justify-end">
                <div class="notify flex flex-item-center flex-justify-end gap-50" >
                    <img src="/img/icon/Plus.svg" alt="plus-img" class="plus-img cursor">
                    <img src="/img/icon/Chat.svg" alt="chat-img" class="chat-img cursor">
                    <div class="notification flex flex-item-center flex-justify-center">
                        <img src="/img/icon/Notification.svg" alt="Notification-img" class="notification-img cursor">
                        <div class="notification-num flex flex-item-center flex-justify-center">2</div>
                    </div>
                    <div class="avatar cursor"></div>
                </div>

                <!-- rectangle notification -->
                <div class="rect-notification flex flex-column flex-item-center gap-5 hidden">
                    <div class="title">
                        <h6>Recent Notification</h6>
                    </div>
                    <div class="notification-list flex flex-column flex-item-center ">
                       <div class="n-list flex flex-item-center flex-justify-between gap-15">
                         <div class="img">
                            <img src="/img/following-img/img1.svg" alt="">
                            <div class="icon flex flex-item-center flex-justify-center">
                                <img src="/img/icon/Chat-s.svg" alt="">
                            </div>
                        </div>
                        <div class="name flex flex-column flex-item-start">
                            <p>Sarah Saunders</p>
                            <div class="descrip flex flex-item-center gap-10 ">
                                <p>Commented on</p>
                                <p>Collab Design</p>
                            </div>
                        </div>
                        <div class="hour flex flex-item-start flex-justify-start">
                            <p>8h</p>
                        </div>
                       </div>
                        <div class="n-list flex flex-item-center flex-justify-between gap-15">
                         <div class="img">
                            <img src="/img/following-img/img1.svg" alt="">
                            <div class="icon flex flex-item-center flex-justify-center">
                                <img src="/img/icon/Chat-s.svg" alt="">
                            </div>
                        </div>
                        <div class="name flex flex-column flex-item-start">
                            <p>Glenn Greer</p>
                            <div class="descrip flex flex-item-center gap-10 ">
                                <p>Commented on</p>
                                <p>Sapiens Illustration</p>
                            </div>
                        </div>
                        <div class="hour flex flex-item-start flex-justify-start">
                            <p>12h</p>
                        </div>
                       </div>
                        <div class="n-list flex flex-item-center flex-justify-between gap-15">
                         <div class="img">
                            <img src="/img/following-img/img1.svg" alt="">
                            <div class="icon flex flex-item-center flex-justify-center">
                                <img src="/img/icon/Chat-s.svg" alt="">
                            </div>
                        </div>
                        <div class="name flex flex-column flex-item-start">
                            <p>Sarah Saunders</p>
                            <div class="descrip flex flex-item-center gap-10 ">
                                <p>Commented on</p>
                                <p>Collab Design</p>
                            </div>
                        </div>
                        <div class="hour flex flex-item-start flex-justify-start">
                            <p>16h</p>
                        </div>
                       </div>
                        <div class="n-list flex flex-item-center flex-justify-between gap-15">
                         <div class="img">
                            <img src="/img/following-img/img1.svg" alt="">
                            <div class="icon flex flex-item-center flex-justify-center">
                                <img src="/img/icon/Chat-s.svg" alt="">
                            </div>
                        </div>
                        <div class="name flex flex-column flex-item-start">
                            <p>Sarah Saunders</p>
                            <div class="descrip flex flex-item-center gap-10 ">
                                <p>Commented on</p>
                                <p>Folio Designer</p>
                            </div>
                        </div>
                        <div class="hour flex flex-item-start flex-justify-start">
                            <p>21h</p>
                        </div>
                       </div>
                        <div class="n-list flex flex-item-center flex-justify-between gap-15">
                         <div class="img">
                            <img src="/img/following-img/img1.svg" alt="">
                            <div class="icon flex flex-item-center flex-justify-center">
                                <img src="/img/icon/Chat-s.svg" alt="">
                            </div>
                        </div>
                        <div class="name flex flex-column flex-item-start">
                            <p>Sarah Saunders</p>
                            <div class="descrip flex flex-item-center gap-10 ">
                                <p>Sent you a message 📪 </p>
                            </div>
                        </div>
                        <div class="hour flex flex-item-start flex-justify-start">
                            <p>22h</p>
                        </div>
                       </div>
                        <div class="n-list flex flex-item-center flex-justify-between gap-15">
                         <div class="img">
                            <img src="/img/following-img/img1.svg" alt="">
                            <div class="icon flex flex-item-center flex-justify-center">
                                <img src="/img/icon/Chat-s.svg" alt="">
                            </div>
                        </div>
                        <div class="name flex flex-column flex-item-start">
                            <p>Sarah Saunders</p>
                            <div class="descrip flex flex-item-center gap-10 ">
                                <p>Liked</p>
                                <p>Folio Agency</p>
                            </div>
                        </div>
                        <div class="hour flex flex-item-start flex-justify-start">
                            <p>22h</p>
                        </div>
                       </div>
                    </div>
                </div>

                <!-- rectangle avatar -->
                <div class="rect-avatar flex flex-column flex-item-center gap-20 hidden">
                    <div class="name flex flex-column flex-item-center flex-justify-around gap-20">
                        <div class="user flex flex-item-center gap-20 ">
                            <div class="img">
                                <img src="/img/following-img/img1.svg" alt="">
                                <div class="online point"></div>
                            </div>
                            <div class="user-name flex flex-column flex-item-start flex-justify-start">
                                <div class="top flex flex-item-center flex-justify-center gap-15">
                                    <h5>Dylan Hodges</h5>
                                    <div class="valid flex flex-item-center flex-justify-center">
                                        <img src="/img/icon/validation-icon-w.svg" alt="">
                                    </div>
                                </div>
                                <div class="details flex flex-item-center gap-15">
                                    <p>536K followers</p>
                                    <p>120 videos</p>
                                </div>
                            </div>
                        </div>
                        <p>A League of Legends player. For business inquiries contact: dylan@ui8.net</p>
                    </div>
                    <div class="bottoms flex flex-item-center flex-justify-between gap-10">
                        <a href="../../avatar.html"><button class="btn">Visit Profile</button></a>
                        <div class="setting btn3 flex flex-item-center flex-justify-center">
                            <img src="/img/icon/setting2.svg" alt="setting">
                        </div>
                    </div>
                </div>

            </div>

        `

        searchBarContainer.insertAdjacentHTML('afterbegin', htmlCode);
    rectangle();

    const burgerIcon = searchBarContainer.querySelector('.burger-icon');
    return { burgerIcon };



};