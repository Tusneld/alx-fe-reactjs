import { useContext } from 'react';
import UserContext from '../context/UserContext';

function UserDetails() {
    const userData = useContext(UserContext);

    return (
        <div style={{
            border: '2px solid #007BFF',
            padding: '20px',
            margin: '20px',
            borderRadius: '10px'
        }}>
            <h2>User Details</h2>
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
        </div>
    );
}

export default UserDetails;