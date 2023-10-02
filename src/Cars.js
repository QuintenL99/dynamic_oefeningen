import {Card, CardBody, CardText, CardTitle, Col, Container, Row} from "react-bootstrap";

export function Cars(props) {
    const {cars, title} = props
    return <div className="mt-3 rounded shadow-sm" style={{backgroundColor: "lavender"}}>
        <h3 className="text-center">{title}</h3>
        <Container>
            <Row>
                {cars.map((item) =>
                    <Col key={item.id}
                         className={"text-center "}>
                        <Card className="m-2 p-2 shadow-sm">
                            <CardBody>
                                <CardTitle>{item.name}</CardTitle>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{item.brand ? "merk: " + item.brand : ""}</li>
                                    <li className="list-group-item">{item.type ? "type: " + item.type : ""}</li>
                                    <li className="list-group-item">{item.color ? "kleur: " + item.color : ""}</li>
                                    <li className="list-group-item">{item.note ? "opm: " + item.note : ""}</li>
                                </ul>
                            </CardBody>
                        </Card>
                    </Col>)
                }
            </Row>
        </Container>
    </div>

}