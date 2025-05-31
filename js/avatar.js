import searchBar from "./nav-bar/shearch-bar.js";
import cards from "./card-game-liveChannels/card.js";
import cardsRecomended from "./card-game-recomendedVideo/card-recomended.js";
import allCardsCategory from "./category-section/all-cards.js";

document.addEventListener("DOMContentLoaded",()=>{
    
    searchBar();
    cards();
    cardsRecomended();
    allCardsCategory();

});