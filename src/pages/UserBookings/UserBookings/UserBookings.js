import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import SingleItem from '../SingleItem/SingleItem';
const UserBookings = () => {
    const {user} = useAuth();
    const [usersBookings, setUserBookings] = useState([]);

    useEffect(() => {
        fetch(`https://frightening-vault-95840.herokuapp.com/allBookings/${user.email}`)
        .then(res => res.json())
        .then(data => setUserBookings(data))
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this trip?');
        if (proceed) {
            const url = `https://frightening-vault-95840.herokuapp.com/allBookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remainingBookings = usersBookings.filter(event => event._id !== id);
                    setUserBookings(remainingBookings);
                    alert('Trip cancel successfully');
                }
            });
        };
    };

    return (
        <div className="container my-3 my-md-5">
            <h2 className="fw-bold mb-5">You have booked {usersBookings.length} packages</h2>
            {
                (usersBookings.length === 0) && <Link to="/"><Button variant="warning text-white rounded-0 my-5 px-5">Go back Home</Button></Link>
            }
            <div className="row gy-5 px-2">
                {
                    usersBookings.map(singleItem => <SingleItem key={singleItem._id} handleDelete={handleDelete} singleItem={singleItem}></SingleItem>)
                }
            </div>
        </div>
    );
};

export default UserBookings;