const UserProfile = (props) => {
    return (
        <div style={{
            border: '2px solid #4CAF50', 
            borderRadius: '10px',
            padding: '20px',
            margin: '15px', 
            backgroundColor: '#f9f9f9',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
           }}>
            <h2 style={{
                color: '#2E7D32',
                marginBottom: '10px',
                borderBottom: '1px solid #ccc',
                paddingBottom: '5px'
            }}>
                {props.name}
            </h2>
            <p style={{ fontSize: '16px', margin: '5px 0' }}>
                Age: <span style={{ fontWeight: 'bold', color: '#1976D2' }}>{props.age}</span>
            </p>
            <p style={{ fontSize: '16px', margin: '5px 0', fontStyle: 'italic' }}>
                Bio: {props.bio}
            </p>
        </div>
    );
};

export default UserProfile;