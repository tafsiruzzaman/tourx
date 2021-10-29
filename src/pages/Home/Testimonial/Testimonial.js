import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import user1 from '../../../images/user1.png';
import user2 from '../../../images/user2.png';
import user3 from '../../../images/user3.png';
import user4 from '../../../images/user4.jpg';
const Testimonial = () => {
    return (
        <div>
            <div className="container">
                <div>
                    <h3 className="orange-text pt-5 bb-3">Our Traveller Say</h3>
                    <h1 className="header-text-colour pb-5">What Oue Traveller Say <br className="d-none d-md-block"/>About Us</h1>
                </div>
                <div>
                    <Row xs={1} md={2} lg={4} className="g-4 pb-5">
                        <Col>
                            <Card className="border-0 shadow">
                                <div className=" px-5 pt-4 pb-3">
                                <Card.Img variant="top img-fluid rounded-circle border border-5 w-50 mx-auto" className="" src={user1} />
                                </div>
                                <Card.Body>
                                    <h3 className="header-text-colour">Mark Wood</h3>
                                    <h5 className="text-secondary">Traveller</h5>
                                    <h6 className="text-secondary py-3 px-2">We made it home safe and sound. I didn’t want to jinx us, but this trip went perfect without a glitch. We both want to say thank you for organizing such a great trip.</h6>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="border-0 shadow">
                                <div className=" px-5 pt-4 pb-3">
                                <Card.Img variant="top img-fluid rounded-circle border border-5 w-50 mx-auto" className="" src={user2} />
                                </div>
                                <Card.Body>
                                    <h3 className="header-text-colour">Anny Ross</h3>
                                    <h5 className="text-secondary">Traveller</h5>
                                    <h6 className="text-secondary py-3 px-2">My dad and I had the time of our lives on the 2021 Tour de France trip. It exceeded our expectations! complete the tour both of us without any problems at all.</h6>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="border-0 shadow">
                                <div className=" px-5 pt-4 pb-3">
                                <Card.Img variant="top img-fluid rounded-circle border border-5 w-50 mx-auto" className="" src={user3} />
                                </div>
                                <Card.Body>
                                    <h3 className="header-text-colour">Ben Dunck</h3>
                                    <h5 className="text-secondary">Traveller</h5>
                                    <h6 className="text-secondary py-3 px-2">My wife and I booked a private Tour de France trip thru TourX. I wanted to see the Tour de France live and ride part of the route to celebrate my 70th birthday.</h6>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="border-0 shadow">
                                <div className=" px-5 pt-4 pb-3">
                                <Card.Img variant="top img-fluid rounded-circle border border-5 w-50 mx-auto" className="" src={user4} />
                                </div>
                                <Card.Body>
                                    <h3 className="header-text-colour">Alyssa Perry</h3>
                                    <h5 className="text-secondary">Traveller</h5>
                                    <h6 className="text-secondary py-3 px-2">Thank you soooo much for all you did to accommodate us this year. We had another great time in this pandemic situation. Enjoy a much needed vacation.</h6>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;