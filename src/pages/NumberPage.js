import {Numbers} from "../Numbers";

export function NumberPage(props) {
    const {numbers} = props;
    const filter = numbers.filter(f => f>6);
    const dubbel = numbers.map(item => item*2)
    return <div>
        <Numbers numbers={numbers} title = {'alle getallen'}/>
        <Numbers numbers={filter} title = {'alle getallen groter dan 6'}/>
        <Numbers numbers={dubbel} title = {'alle getallen verdubbeld'}/>
    </div>

}

