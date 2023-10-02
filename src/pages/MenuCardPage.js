import {MenuCard} from "../MenuCard";
import {PRODUCTS_DATA} from "../data";

export function MenuCardPage(){
    return (
        <div>
            <MenuCard products={PRODUCTS_DATA}/>
        </div>
    );
}