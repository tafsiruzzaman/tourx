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
        console.log("delete", id)
    }

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