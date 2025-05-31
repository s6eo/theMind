import cards from "./card-game-liveChannels/card.js";
import allCardsCategory from "./category-section/all-cards.js";
import sideBar from "./nav-bar/side-bar.js";
import searchBar from "./nav-bar/shearch-bar.js";
import navMedia from "./nav-bar/nav-media.js";

document.addEventListener('DOMContentLoaded', ()=>{

    sideBar();
    cards();
    allCardsCategory();

    const { burgerIcon } = searchBar();
    navMedia(burgerIcon);
});