import cardDetails from "./card-data.js";
import caedComponint from "./card-componint.js";


export default function cardsRecomended(){

    cardDetails.forEach( (items)=> {
        return caedComponint(items);
    });

};

