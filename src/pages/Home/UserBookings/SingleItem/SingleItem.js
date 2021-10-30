import React from 'react';
import { Button } from 'react-bootstrap';

const SingleItem = (props) => {
    console.log(props)
    const {img, packageName, date, adult, child, price, status, id} = props.singleItem;
    const {handleDelete} = props;
    return (
        <div className="col-lg-6">
            <div className="row">
                <div className="col-md-5">
                    <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="col-md-7 text-start">
                    <div className="row">
                        <h5 className="fw-bolder mt-2 mt-md-0">Package: {packageName}</h5>
                        <div className="col-6 col-md-12">
                            <small className=" d-block fw-bold">Date: {date}</small>
                            <small className=" d-block fw-bold">Adult: {adult}, Child: {child}</small>
                            <small className=" d-block fw-bold">Pirce/person: {price}</small>
                            <small className=" d-block fw-bold orange-text">Status: {status}</small>
                        </div>
                        <div className="col-6 col-md-12">
                            <div className="d-flex align-item-center">
                                <Button onClick={()=> handleDelete(id)} variant="warning rounded-0 text-white px-4 mt-2">Cencel</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;