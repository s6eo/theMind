import searchBar from "./nav-bar/shearch-bar.js";
import sideBar from "./nav-bar/side-bar.js";
import navMedia from "./nav-bar/nav-media.js";
import AlltrendCards from "./trending-card/all-cards.js";
import FilterRectangle from "./trending-card/filterRectangle.js";

document.addEventListener('DOMContentLoaded', ()=>{

    sideBar();
    const { burgerIcon } = searchBar();
    navMedia(burgerIcon);
    AlltrendCards();
    FilterRectangle();



}); 