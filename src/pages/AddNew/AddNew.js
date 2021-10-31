import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

const AddNew = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        if(data.totalRatting.length >=4) {
            data.totalRatting = `${(parseFloat(data.totalRatting) / 1000)}+K`
        }
        else{
            data.totalRatting = `${data.totalRatting} `
        }
        fetch('https://frightening-vault-95840.herokuapp.com/packages', {
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
                alert('Package added Successfully')
                history.push('/')
            }
        })
    };
    return (
        <div className="container my-3 my-lg-5">
            <div className="w-100 bg-warning text-white text-start mb-4">
                <h4 className="text-white fw-bolder py-3 ms-4">
                    <span className="header-text-colour"><i className="me-2 fas fa-user-cog"></i></span> Add a new Package
                </h4>
            </div>
            <div className="container">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="d-md-flex text-start fw-bold">
                        <div className="w-100 px-3">
                            <Form.Group className="mb-3 me-2">
                                <Form.Label>Package Name <span className="text-danger">*</span></Form.Label>
                                <Form.Control type="text" placeholder="Package name" {...register("name", { required: true })} />
                                {errors.name && <span className="text-danger">required *</span>}
                            </Form.Group>
                            <Form.Group className="mb-3 me-2">
                                <Form.Label>Package Image <span className="text-danger">*</span></Form.Label>
                                <Form.Control type="text" placeholder="Package Image" {...register("img", { required: true })} />
                                {errors.img && <span className="text-danger">required *</span>}
                            </Form.Group>
                            <div className="d-flex">
                                <Form.Group className="mb-3 me-2 w-50">
                                    <Form.Label>Days <span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="number" placeholder="Days" {...register("days", { required: true })} />
                                    {errors.days && <span className="text-danger">required *</span>}
                                </Form.Group>
                                <Form.Group className="mb-3 me-2 w-50">
                                    <Form.Label>Nights <span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="number" placeholder="Nights" {...register("nights", { required: true })} />
                                    {errors.nights && <span className="text-danger">required *</span>}
                                </Form.Group>
                            </div>
                            <div className="d-flex">
                                <Form.Group className="mb-3 me-2 w-50">
                                    <Form.Label>Average Ratting <span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="Text" placeholder="Average Ratting" {...register("avgRatting", { required: true })} />
                                    {errors.avgRatting && <span className="text-danger">required *</span>}
                                </Form.Group>
                                <Form.Group className="mb-3 me-2 w-50">
                                    <Form.Label>Total Ratting <span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Total Ratting" {...register("totalRatting", { required: true })} />
                                    {errors.totalRatting && <span className="text-danger">required *</span>}
                                </Form.Group>
                            </div>
                            <div className="d-flex">
                                <Form.Group className="mb-3 me-2 w-50">
                                    <Form.Label>Price <span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="Text" placeholder="Price" {...register("price", { required: true })} />
                                    {errors.price && <span className="text-danger">required *</span>}
                                </Form.Group>
                                <Form.Group className="mb-3 me-2 w-50">
                                    <Form.Label>Location <span className="text-danger">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="Location" {...register("location", { required: true })} />
                                    {errors.location && <span className="text-danger">required *</span>}
                                </Form.Group>
                            </div>
                        </div>
                        <div className="w-100 px-3 btn-colour">
                            <Form.Group className="mb-3 me-2">
                                <Form.Label>Package Description <span className="text-danger">*</span></Form.Label>
                                <Form.Control as="textarea" placeholder="Description" rows={10} {...register("description", { required: true })} />
                                {errors.description && <span className="text-danger">required *</span>}
                            </Form.Group>
                            <Button variant="warning text-white px-5 rounded-0" type="submit">
                                Submit
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default AddNew;