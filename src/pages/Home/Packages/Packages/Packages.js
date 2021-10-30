import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Package from '../Package/Package';
import './Packages.css';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/packages')
        .then(res => res.json())
        .then(data => setPackages(data))
    }, [])
    return (
        <div className="container my-5">
            <div>
                <h3 className="orange-text">Choose Your Package</h3>
                <h1 className="header-text-colour">Select Your Best Package <br className="d-none d-md-block"/> For Your Travel</h1>
            </div>
            <div className="my-5">
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        packages.map(singlePackage => <Package key={singlePackage._id} singlePackage={singlePackage}></Package>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Packages;