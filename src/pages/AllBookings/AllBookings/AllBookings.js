import React, { useState } from 'react';
import SingleBooking from '../SingleBooking/SingleBooking';


const AllBookings = () => {
    const [all_bookings, setAll_bookings] = useState([])
    useState(() => {
        fetch('https://frightening-vault-95840.herokuapp.com/allBookings')
        .then(res => res.json())
        .then (data => {
            setAll_bookings(data);
        })
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this record?');
        if (proceed) {
            const url = `https://frightening-vault-95840.herokuapp.com/allBookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remainingBookings = all_bookings.filter(event => event._id !== id);
                    setAll_bookings(remainingBookings);
                    alert('Trip cancel successfully');
                }
            });
        };
    }
    return (
        <div className="container my-5">
            <h3 className="text-center mb-3 fw-bolder">All Bookings</h3>
            <div className="table-responsive">
            <table className="table table-striped table-bordered">
                <thead>
                <tr className="bg-dark text-white">
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Package Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        all_bookings.map(singleBooking =>
                            <SingleBooking key={singleBooking._id} handleDelete={handleDelete} singleBooking={singleBooking}></SingleBooking>
                        )
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default AllBookings;