import cards from "./trendcard.js";
import TCardDetails from "../trending-card/card-data.js";


export default function AlltrendCards(){
    TCardDetails.forEach((items)=>{
        return cards(items) ;
    });
}