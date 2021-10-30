import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import SingleItem from '../SingleItem/SingleItem';
const UserBookings = () => {
    const {user} = useAuth();
    const [usersBookings, setUserBookings] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/allBookings/${user.email}`)
        .then(res => res.json())
        .then(data => setUserBookings(data))
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this trip?');
        if (proceed) {
            const url = `http://localhost:5000/allBookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remainingUsers = usersBookings.filter(event => event._id !== id);
                    setUserBookings(remainingUsers);
                    alert('Trip cancel successfully');
                }
            });
        };
    };

    return (
        <div className="container my-3 my-md-5">
            <div className="row gy-5 px-2">
                {
                    usersBookings.map(singleItem => <SingleItem key={singleItem._id} handleDelete={handleDelete} singleItem={singleItem}></SingleItem>)
                }
            </div>
        </div>
    );
};

export default UserBookings;