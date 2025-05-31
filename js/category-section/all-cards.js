import cards from "./cards.js";
import cardDetails from "./card-data.js";

export default function allCardsCategory(){
    cardDetails.forEach((items)=>{
        return cards(items);
    });

};

