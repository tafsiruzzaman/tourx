import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Button, Form, Spinner} from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
const Booking = () => {
    const {id} = useParams();
    const history = useHistory();
    const {user} = useAuth();
    const [singlePack, setSinglePack] = useState({});
    const url = `https://frightening-vault-95840.herokuapp.com/package/${id}`;
    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setSinglePack(data))
    }, []);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.img = singlePack.img;
        data.packageName = singlePack.name;
        data.price = singlePack.price;
        data.status = "Pending";
        data.id = singlePack._id;
        
        fetch('https://frightening-vault-95840.herokuapp.com/allBookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                reset();
                alert('Your Booking is Successfully')
                history.push('/myBookings')
            }
        })
    };
    return (
        <div className="container my-5">
            <div className="row">
                {
                    singlePack.length === 0 ?
                    <Button variant="warning" disabled>
                    <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    />
                        Loading...
                    </Button>
                    :
                    <div className="col-lg-7">
                        <div>
                            <img className="img-fluid" src={singlePack.img} alt="" />
                            <div className="mt-4 d-flex align-item-center justify-content-between">
                                <div className="text-start">
                                    <h2 className="header-text-colour">{singlePack.name}</h2>
                                    <h6 className="text-secondary pt-2"><i className="fas fa-map-marker-alt"></i> {singlePack.location}</h6>
                                </div>
                                <div className="text-start">
                                    <small className="d-block">Excellent</small>
                                    <small className="d-block">Ratting: <i className="orange-text fas fa-star"></i> {singlePack.avgRatting}</small>
                                    <small className="d-block">{singlePack.totalRatting} Review</small>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="mt-2 d-flex align-items-center">
                                                    <h3 className="orange-text mb-0"><i className="me-3 far fa-clock"></i></h3>
                                                    <div>
                                                        <p className="mb-0 fw-bolder">Duration</p>
                                                        <small className="mb-0 text-secondary">Daily Tour</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="mt-2 d-flex align-items-center">
                                                    <h3 className="orange-text mb-0"><i className="me-3 fas fa-walking"></i></h3>
                                                    <div>
                                                        <p className="mb-0 fw-bolder">Tour Type</p>
                                                        <small className="mb-0 text-secondary">{singlePack.days} days</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="mt-2 d-flex align-items-center">
                                                    <h3 className="orange-text mb-0"><i className="me-3 fas fa-users"></i></h3>
                                                    <div>
                                                        <p className="mb-0 fw-bolder">Group Size</p>
                                                        <small className="mb-0 text-secondary">30 People</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="mt-2 d-flex align-items-center">
                                                    <h3 className="orange-text mb-0"><i className="me-3 fas fa-language"></i></h3>
                                                    <div>
                                                        <p className="mb-0 fw-bolder">Languages</p>
                                                        <small className="mb-0 text-secondary">Any Language</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="my-4">
                                <h1 className="header-text-colour text-start">Overview</h1>
                                <p className="text-secondary" style={{textAlign: "justify"}}>{singlePack.description}</p>
                            </div>
                        </div>
                    </div>
                }
                <div className="col-lg-5">
                    <div className="px-4 py-4 shadow">
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <h2 className="header-text-colour mb-4">Book This Package</h2>
                            <Form.Group className="mb-3">
                                <Form.Control type="Text" defaultValue={user.displayName} placeholder="Your full name" {...register("name", { required: true })}/>
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="email" defaultValue={user.email} placeholder="Enter email" {...register("email", { required: true })}/>
                                {errors.email && <span className="text-danger">This field is required</span>}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="number" placeholder="Phone" {...register("phone", { required: true })}/>
                                {errors.phone && <span className="text-danger">This field is required</span>}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Select {...register("travelOption", { required: true })}>
                                    <option>Travel Option</option>
                                    <option>Travel With Bus</option>
                                    <option>Travel With Train</option>
                                    <option>Travel With Plane</option>
                                </Form.Select>
                                {errors.travelOption && <span className="text-danger">This field is required</span>}
                            </Form.Group>
                            <div className="d-flex justify-content-between">
                                <Form.Group className="mb-3 w-50">
                                    <Form.Select {...register("adult", { required: true })}>
                                        <option>Adult</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </Form.Select>
                                    {errors.adult && <span className="text-danger">This field is required</span>}
                                </Form.Group>
                                <Form.Group className="mb-3 w-50">
                                    <Form.Select {...register("child", { required: true })}>
                                        <option>Child</option>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </Form.Select>
                                    {errors.child && <span className="text-danger">This field is required</span>}
                                </Form.Group>
                            </div>
                            <Form.Group className="mb-3">
                                <Form.Control type="date" placeholder="Date" {...register("date", { required: true })}/>
                                {errors.date && <span className="text-danger">This field is required</span>}
                            </Form.Group>
                            <Form.Group className="mb-3 text-start">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={5} {...register("message")}/>
                            </Form.Group>
                            <div className="btn-colour">
                                <Button variant="warning rounded-0 text-white px-4" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </Form>                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;