import headerSlideBar from "./header/headerSlidBar.js";
import cards from "./card-game-liveChannels/card.js";
import cardsRecomended from "./card-game-recomendedVideo/card-recomended.js";
import allCardsCategory from "./category-section/all-cards.js";
import searchBar from "./nav-bar/shearch-bar.js";
import sideBar from "./nav-bar/side-bar.js";
import navMedia from "./nav-bar/nav-media.js";

document.addEventListener('DOMContentLoaded', ()=>{

    sideBar();
    headerSlideBar();
    cards();
    cardsRecomended();
    allCardsCategory();

    const { burgerIcon } = searchBar();
    navMedia(burgerIcon);


}); 