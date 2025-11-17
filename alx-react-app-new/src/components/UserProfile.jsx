const UserProfile = (props) => {
    return (
        <div style={{ 
            border: '1px solid blue',
             padding: '10px',
             margin: '10px',
             borderRadius: '8px',
             maxWidth: '600px',
             backgroundColor: 'white',
             boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
            }}
        >
            <h2 style= {{ color: 'violet', margin: '0 0 8px', fontSize: '22px'}}> 
                Name: {props.name} 
            </h2>
            <p style={{color: 'black', margin: '4px 0'}}> 
                Age:
                <span style={{ fontWeight: '700'}}>
                    {props.age}
                </span>
            </p>
            <p style={{color: 'black', margin: '8px 0 0', lineHeight: 1.5}} > 
                Bio: {props.bio}
            </p>
        </div>
    );
};
export default UserProfile;