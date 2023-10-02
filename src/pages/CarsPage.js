import {Cars} from "../Cars";

export function CarsPage(props) {
    const {cars} = props;
    return <div>
        <Cars cars={cars} title = {"Auto's"}/>
    </div>

    
}