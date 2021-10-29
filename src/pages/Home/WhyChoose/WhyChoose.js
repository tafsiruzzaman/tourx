import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './WhyChoose.css';
import guide from '../../../images/guide.png';
import hands from '../../../images/hands.png';
import experience from '../../../images/experience.png';
import tourtist from '../../../images/traveler.png';


const WhyChoose = () => {
    return (
        <div className="my-5 choose-section">
            <div className="container">
                <div>
                    <h3 className="orange-text pt-5 bb-3">Why Choose TourX</h3>
                    <h1 className="header-text-colour pb-5">Why You Are Travel With <br className="d-none d-md-block"/>TourX</h1>
                </div>
                <div>
                    <Row xs={1} md={2} lg={4} className="g-4 pb-5">
                        <Col>
                            <Card style={{backgroundColor: "#315048"}}>
                                <Card.Img variant="top img-fluid px-4 py-3 w-50 mx-auto" className="" src={guide} />
                                <Card.Body>
                                <Card.Title className="text-white px-3">2000+ Our worldwide guide</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{backgroundColor: "#315048"}}>
                                <Card.Img variant="top img-fluid px-5 py-4 w-75 mx-auto" className="" src={hands} />
                                <Card.Body>
                                <Card.Title className="text-white px-3">100% trusted travel agency</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{backgroundColor: "#315048"}}>
                                <Card.Img variant="top img-fluid px-2 w-50 mx-auto" className="" src={experience} />
                                <Card.Body>
                                <Card.Title className="text-white px-3">10+ year of travel experience</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{backgroundColor: "#315048"}}>
                                <Card.Img variant="top img-fluid px-2 w-50 mx-auto" className="" src={tourtist} />
                                <Card.Body>
                                <Card.Title className="text-white px-3">90% of our traveller happy</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;