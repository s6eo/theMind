export default function sideBar(){

    const sideBarComponint = document.querySelector('.nav-bar');

    const htmlCode = 
        `    
            <div class="top flex flex-column flex-item-center gap-30 ">
                <div class="logo flex flex-item-center flex-justify-evenly gap-30 ">
                    <a class="name flex flex-item-center flex-justify-between" href="index.html">
                        <img src="img/icon/logo.png" alt="logo">
                        <h1>The Mind</h1>
                    </a>
                    <div class="burger-icon flex flex-column gap-6">
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <div class="menu">
                    <ul class="flex flex-column flex-item-center">
                        <li> New Feeds</li>
                        <li><a href=""  class="nav-active">
                                <img src="img/icon/new-feed.svg" alt="">
                                <span> New Feed </span>
                            </a>
                        </li>
                        <li><a href="trending.html">
                                <img src="img/icon/treanding.svg" alt="">
                                <span> Trending </span>
                            </a>
                        </li>
                        <li><a href="">
                                <img src="img/icon/following.svg" alt="">
                                <span> Following </span>
                            </a>
                        </li>
                        <li><a href="live.html">
                                <img src="img/icon/video.svg" alt="">
                                <p>Your Videos</p>
                                <img src="img/icon/morevideo.svg" alt="">
                            </a>
                        </li>
                        <li><a href="">
                                <img src="img/icon/playlist.svg" alt="">
                                <span> Playlist </span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="following ">
                    <div class="following-container flex flex-column  flex-item-center ">
                        <div> Following </div>
                        <div class="container">
                        <img src="img/following-img/img1.svg" alt="">
                        <div class="name">
                            <p>Dylan Hodges</p>
                            <img src="img/icon/wifi.svg" alt="">
                        </div>
                        </div>
                        <div class="container">
                        <img src="img/following-img/img2.svg" alt="">
                        <div class="name">
                            <p>Vincent Parks</p>
                            <img src="img/icon/online-green.svg" alt="">
                        </div>
                        </div>
                        <div class="container">
                        <img src="img/following-img/img3.svg" alt="">
                        <div class="name">
                            <p>Richard Bowers</p>
                            <img src="img/icon/wifi.svg" alt="">
                        </div>
                        </div>
                        <div class="container">
                        <img src="img/following-img/img4.svg" alt="">
                        <div class="name">
                            <p>Isaac Lambert</p>
                            <img src="img/icon/wifi.svg" alt="">
                        </div>
                        </div>
                        <div class="container">
                        <img src="img/following-img/img2.svg" alt="">
                        <div class="name">
                            <p>Lillie Nash</p>
                            <img src="img/icon/online-green.svg" alt="">
                        </div>
                        </div>
                        <div class="container">
                        <img src="img/following-img/img5.svg" alt="">
                        <div class="name">
                            <p>Edith Cain</p>
                            <img src="img/icon/wifi.svg" alt="">
                        </div>
                        </div>
                        <div class="container">
                        <img src="img/following-img/img1.svg" alt="">
                        <div class="name">
                            <p>Jerry Sherman</p>
                            <img src="img/icon/wifi.svg" alt="">
                        </div>
                        </div>
                        <div class="container">
                        <img src="img/icon/d-arrow.svg" alt="">
                        <div class="name">
                            <p>Load more</p>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="unity-gaming">
                    <div class="untiy-container flex flex-column  flex-item-center">
                        <div>Unity Gaming</div>
                        <div class="container">
                            <img src="img/icon/Chat.svg" alt="">
                            <div class="name">
                                <p>Chat</p>
                                <div class="alarms flex flex-item-center">20</div>
                            </div>
                        </div>
                        <div class="container">
                            <img src="img/icon/Setting.svg" alt="">
                            <div class="name">
                                <p>Settings</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="bottom flex flex-item-center flex-column gap-40">
                <div class="join flex flex-item-center flex-justify-center">
                    <div class="close flex flex-item-center flex-justify-center">
                        <img src="img/icon/X.svg" alt="">
                    </div>
                    <div class="text flex flex-column gap-20">
                        <div class="paragraph flex flex-column gap-10">
                            <h3>Join the <br> Unity Gaming</h3>
                            <p>Discover the best live streams anywhere.</p>
                        </div>
                        <button class="btn">Join Now</button>
                    </div>
                </div>

                <div class="purchase flex flex-item-center flex-justify-evenly">
                    <img src="img/icon/night-mode.svg" alt="">
                    <div class="dark-mode-change flex flex-item-center "><div class="switch"></div></div>
                    <img src="img/icon/download.svg" alt="">
                </div>
            </div>

        `

    sideBarComponint.insertAdjacentHTML('afterbegin', htmlCode);

    


};