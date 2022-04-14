import { NavLink } from 'react-router-dom';

const Card = ({ user }) => {
    const { id, name, company} = user;

    return (
        <div className='col-md-4 p-3 border bg-light' key={id}>
            <h4>{name}</h4>
            <p><strong>Company Name:</strong> {company.name}</p>
            <NavLink className='link-secondary' to={{pathname: `/users/${id}`}}>View Details</NavLink>
        </div>
    );
};

export default Card;