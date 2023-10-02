import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Col, Container, Row} from "react-bootstrap";

export function Numbers(props){
    const {numbers,title} = props;
    return <div className="mt-3 rounded shadow-sm" style={{backgroundColor: "lavender"}}>
        <h2 className="text-center">{title}</h2>
        <Container>
            <Row>
                {numbers.map((item, i) =>
                    <Col key={i}
                         className={"text-center "}>
                        <Card className="m-2 p-2 shadow-sm">{item}</Card>
                    </Col>)
                }
            </Row>
        </Container>
    </div>
}