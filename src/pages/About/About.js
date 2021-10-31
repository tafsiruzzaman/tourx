import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import WhyChoose from '../Home/WhyChoose/WhyChoose';
import Testimonial from '../Home/Testimonial/Testimonial';

const About = () => {
    return (
        <div className="container my-5 text-start">
            <p className="orange-text fw-bolder fs-5">Tour Guide</p>
            <h1 className="header-text-colour">All Guide Are 5 Year <br className="d-none d-md-block"/> Expart In Travel</h1>
            <div className="container text-center mt-4">
                <Row xs={1} md={2} lg={3} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top img-fluid" src="https://www.tourx-react.egenslab.com/static/media/guide-1.a5da4cec.png" />
                            <Card.Body className="mt-3">
                                <h3 className="header-text-colour">Ane Lyne</h3>
                                <h6 className="fw-bolder">Tour Guide</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top img-fluid" src="https://www.tourx-react.egenslab.com/static/media/guide-3.fe55b700.png" />
                            <Card.Body className="mt-3">
                                <h3 className="header-text-colour">Shakira Ku</h3>
                                <h6 className="fw-bolder">Tour Guide</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top img-fluid" src="https://www.tourx-react.egenslab.com/static/media/guide-4.db1ff982.png" />
                            <Card.Body className="mt-3">
                                <h3 className="header-text-colour">Robart Nill</h3>
                                <h6 className="fw-bolder">Tour Guide</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <WhyChoose></WhyChoose>
            <Testimonial></Testimonial>
        </div>
    );
};

export default About;