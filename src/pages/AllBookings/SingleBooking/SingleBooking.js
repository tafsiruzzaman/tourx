import React, { useEffect, useState } from 'react';

const SingleBooking = (props) => {
    const [approved, setApproved] = useState(false);
    const [status, setStatus] = useState(props.singleBooking.status);
    const {_id, name, email, phone, packageName, date} = props.singleBooking;
    const handleDelete = props.handleDelete;
    
    const handleApproveBtn = () => {
        
        const bookingInfo = props.singleBooking;
        bookingInfo.status = "Approved";
        const url = `https://frightening-vault-95840.herokuapp.com/allBookings/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                setStatus("Approved")
                alert('Approve Successful');
            }
        })
    }
    
    useEffect(()=> {
        if(status === "Approved") {
            setApproved(true);
        }
    }, [status]);

    return (
        <tr key={_id}>
            <th scope="row">{_id}</th>
            <th>{name}</th>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{packageName}</td>
            <td>{date}</td>
            <td>{status}</td>
            <td>
                <button onClick={()=> handleDelete(_id)} className="border border-0"><i className="text-danger far fa-trash-alt"></i> </button>
                {
                    !approved && <button onClick={handleApproveBtn}>Approve</button>
                }
            </td>
        </tr>
    );
};

export default SingleBooking;