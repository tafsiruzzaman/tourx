import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        alert("We recived your message. We will contact you very soon")
        reset();
    };
    return (
        <div className="container my-5">
            <div className="row g-4">
                <div className="col-md-6 text-start">
                    <h3 className="header-text-colour">Get In Touch</h3>
                    <p className="text-secondary" style={{textAlign: "justify"}}>With a dedicated team of over 100 professionals across BD who specialize only in meetings, incentives, conferences and events, TourX’s customer focused strategies and national reach have consistently ensured our market leadership in the MICE segment of the outbound travel arena.</p>
                    <div className="d-flex">
                        <div>
                            <h1 className="header-text-colour me-4" style={{fontSize: "48px"}}><i className="far fa-clock"></i></h1>
                        </div>
                        <div>
                            <h4 className="orange-text fw-bold">Open Hour</h4>
                            <h6 className="text-secondary">Sat - Thu At <br />10.00Am to 10.00PM</h6>
                        </div>
                    </div>
                    <div className="d-flex mt-3">
                        <div>
                            <h1 className="header-text-colour me-4" style={{fontSize: "48px"}}><i className="far fa-clock"></i></h1>
                        </div>
                        <div>
                            <h4 className="orange-text fw-bold">Close Hour</h4>
                            <h6 className="text-secondary">Friday Office Close</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 text-start">
                    <div className="px-md-3">
                        <h3 className="header-text-colour">Contact Us</h3>
                        <Form className="btn-colour"  onSubmit={handleSubmit(onSubmit)}>
                           <div className="d-flex">
                            <Form.Group className="mb-3 w-50 me-2">
                                <Form.Control type="text" placeholder="Your Name" {...register("name", { required: true })}/>
                                {errors.name && <span className="text-danger">Required *</span>}
                                </Form.Group>
                                <Form.Group className="mb-3 w-50 ms-2">
                                    <Form.Control type="text" placeholder="Subject" {...register("subject", { required: true })}/>
                                    {errors.subject && <span className="text-danger">Required *</span>}
                                </Form.Group>
                           </div>
                           <div className="d-flex">
                                <Form.Group className="mb-3 w-50 me-2">
                                    <Form.Control type="email" placeholder="Your email" {...register("email")}/>
                                </Form.Group>
                                <Form.Group className="mb-3 w-50 ms-2">
                                    <Form.Control type="Number" placeholder="Phone" {...register("phone", { required: true })}/>
                                    {errors.phone && <span className="text-danger">Required *</span>}
                                </Form.Group>
                           </div>
                            <Form.Group className="mb-3">
                                <Form.Control as="textarea" placeholder="Message" rows={4} {...register("message")}/>
                            </Form.Group>
                            <Button variant="warning rounded-0 text-white px-5" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;