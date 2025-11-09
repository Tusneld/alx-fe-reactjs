const UserProfile = (props) => {
    return (
        <div style={{
            border: '2px solid #4CAF50',
            borderRadius: '10px',
            padding: '20px',
            margin: '15px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
            <h2 style={{ 
                color: 'blue',
                marginBottom: '10px',
                fontSize: '24px'
            }}>{props.name}</h2>
            <p style={{ 
                fontSize: '16px',
                margin: '5px 0'
            }}>
                Age: <span style={{ 
                    fontWeight: 'bold',
                    color: '#FF6B35'
                }}>{props.age}</span>
            </p>
            <p style={{
                fontSize: '14px',
                color: '#666',
                fontStyle: 'italic'
            }}>
                Bio: {props.bio}
            </p>
        </div>
    );
};

export default UserProfile;