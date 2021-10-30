import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Package = (props) => {
    const {name, img, price, days, nights, totalRatting, _id} = props.singlePackage;
    const history = useHistory();
    const handleClick = ()=> {
        history.push(`/booking/${_id}`);
    };
    return (
        <Col>
            <Card>
                <Card.Img variant="top img-fluid p-3" src={img} />
                <Card.Body className="px-3">
                <div className="d-flex justify-content-between align-items-center header-text-colour">
                    <h5>${price}/<span className="fs-6">Per Person</span></h5>
                    <h6><i className="fas fa-calendar-alt"></i> {days} Days/{nights} night</h6>
                </div>
                <div className="d-flex justify-content-between align-items-center btn-colour">
                    <div className="text-start">
                        <h6 className="orange-text py-2"><i className="fas fa-map-marker-alt"></i> {name}</h6>
                        <p><small className="header-text-colour"><i className="fas fa-star orange-text"></i>  {totalRatting}Rating</small></p>
                    </div>
                    <Button onClick={handleClick} variant="warning rounded-0 text-white px-3"><i className="fas fa-plus-circle"></i> Book Now</Button>
                </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Package;