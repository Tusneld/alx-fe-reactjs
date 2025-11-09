import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{
            backgroundColor: '#343a40',
            padding: '1rem 0',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 20px'
            }}>
                <Link 
                    to="/" 
                    style={{
                        color: 'white',
                        textDecoration: 'none',
                        fontSize: '1.5rem',
                        fontWeight: 'bold'
                    }}
                >
                    CompanyLogo
                </Link>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <Link 
                        to="/" 
                        style={{
                            color: 'white',
                            textDecoration: 'none',
                            padding: '10px 15px',
                            borderRadius: '5px',
                            transition: 'background-color 0.3s'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#495057'}
                        onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                        Home
                    </Link>
                    <Link 
                        to="/about" 
                        style={{
                            color: 'white',
                            textDecoration: 'none',
                            padding: '10px 15px',
                            borderRadius: '5px',
                            transition: 'background-color 0.3s'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#495057'}
                        onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                        About
                    </Link>
                    <Link 
                        to="/services" 
                        style={{
                            color: 'white',
                            textDecoration: 'none',
                            padding: '10px 15px',
                            borderRadius: '5px',
                            transition: 'background-color 0.3s'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#495057'}
                        onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                        Services
                    </Link>
                    <Link 
                        to="/contact" 
                        style={{
                            color: 'white',
                            textDecoration: 'none',
                            padding: '10px 15px',
                            borderRadius: '5px',
                            transition: 'background-color 0.3s'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#495057'}
                        onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;