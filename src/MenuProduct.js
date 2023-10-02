import * as PropTypes from "prop-types";

function NewComponent(props) {
    return <span style={{
        fontSize: "smaller",
        color: "blue"
    }}>
        {props.products.size ? "(" + props.products.size + ")" : ""}</span>;
}

NewComponent.propTypes = {products: PropTypes.any};

function Notes(props) {
    return <span style={{
        fontSize: "smaller",
        color: "blue"
    }}>
        <br/>{props.products.note ? props.products.note : ""}</span>;
}

Notes.propTypes = {products: PropTypes.any};

export function MenuProduct(props) {
    const {products} = props;
    return <div style={{display: "flex", justifyContent: "space-between"}}><span
        style={{gridColumnStart: "auto"}}>{products.name} <NewComponent products={props.products}/></span>
        <Notes products={props.products}/>
        <span
            style={{}}>{products.price}£</span></div>
}