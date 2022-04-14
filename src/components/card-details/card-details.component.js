import { useLocation, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './card-details.styles.css';

const CardDetails = () => {

    const [user, setUser] = useState('');

    const { name, email, phone, username, website } = user;

    const location = useLocation();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com${location.pathname}`)
            .then((response) => response.json())
            .then((users) => setUser(users));
    }, []);

    console.log(user);

    return (
        <div className='container user-detail col-md-12'>
            <h2>{name}</h2>
            <hr/>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Website:</strong> {website}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <NavLink className='btn btn-secondary' to="/">Go Back</NavLink>
        </div>
    );
};

export default CardDetails;